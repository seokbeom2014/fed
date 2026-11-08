import { getPosts } from '../../lib/posts';
import { profile } from '../../lib/content';
import { abs, siteUrl } from '../../lib/site';

export const revalidate = 3600;

/** XML 텍스트 노드 이스케이프. */
function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** CDATA 안에 들어갈 문자열. 종료 토큰이 섞여 블록이 깨지는 것만 막는다. */
function cdata(value) {
  return String(value ?? '').replace(/\]\]>/g, ']]&gt;');
}

/** RFC 822 — RSS 의 pubDate 형식. */
function rfc822(value) {
  const d = value ? new Date(value) : new Date();
  return (Number.isNaN(d.getTime()) ? new Date() : d).toUTCString();
}

/** 글 본문(문단 배열)과 참고문헌을 RSS 본문용 HTML 로 만든다. */
function toHtml(post) {
  const body = Array.isArray(post.body)
    ? post.body
    : String(post.body || '').split('\n\n');

  const paragraphs = body
    .filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`)
    .join('\n');

  const refs = Array.isArray(post.refs) ? post.refs.filter(Boolean) : [];
  const refsHtml = refs.length
    ? `\n<h3>References</h3>\n<ol>\n${refs
        .map((r) => `<li>${esc(r)}</li>`)
        .join('\n')}\n</ol>`
    : '';

  return `${paragraphs}${refsHtml}
<p><em>이 글은 일반적인 의학 정보이며 개별 환자의 진단이나 치료를 대신하지 않습니다.</em></p>`;
}

export async function GET() {
  const { posts } = await getPosts();

  const sorted = [...posts].sort(
    (a, b) => new Date(b.published_at || 0) - new Date(a.published_at || 0)
  );

  const items = sorted
    .map((post) => {
      const url = abs(`/notes/${post.slug}`);
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${rfc822(post.published_at)}</pubDate>
      ${post.category ? `<category>${esc(post.category)}</category>` : ''}
      <description>${esc(post.summary)}</description>
      <content:encoded><![CDATA[${cdata(toHtml(post))}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const lastBuild = rfc822(sorted[0]?.published_at);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(`${profile.nameKo} 건강정보 노트`)}</title>
    <link>${esc(siteUrl)}</link>
    <description>${esc(
      '대동맥질환 — 가족력, 검진 간격, 수술 시점에 대해 진료실에서 가장 많이 나온 질문을 근거와 함께 정리합니다.'
    )}</description>
    <language>ko</language>
    <copyright>${esc(`© ${new Date().getFullYear()} ${profile.nameEn}`)}</copyright>
    <managingEditor>${esc(`${profile.email} (${profile.nameKo})`)}</managingEditor>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${esc(abs('/feed.xml'))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
