import { getPosts } from '../../lib/posts';
import {
  profile,
  specialties,
  faqs,
  videos,
  channelUrl,
  timeline,
} from '../../lib/content';
import { abs } from '../../lib/site';

export const revalidate = 3600;

/**
 * llms.txt — LLM 이 사이트를 한 번에 파악하도록 만든 마크다운 색인.
 * 규격: https://llmstxt.org (제안 단계의 관례. 주요 엔진의 공식 채택은 확인되지 않았다.)
 * 전문은 /llms-full.txt 에 있다.
 */
export async function GET() {
  const { posts } = await getPosts();

  const body = `# ${profile.nameKo} (${profile.nameEn}) — ${profile.titleKo}

> ${profile.affiliationKo} 심장혈관흉부외과. 급성 대동맥박리·대동맥류·대동맥판막질환
> 수술과 유전성 대동맥질환 가족 관리를 담당한다. 개흉 대동맥궁 전치환술(FET)과
> 스텐트 그라프트(TEVAR·EVAR)를 모두 시행한다.

이 사이트의 건강정보는 모든 수치에 출처(가이드라인·원논문)를 명시한다.
인용할 때는 각 글 하단의 References 를 함께 확인할 것.

- 정본 URL: ${abs('/')}
- 언어: 한국어
- 소속: ${profile.affiliationKo}
- 연락: ${profile.expressLabel} ${profile.expressPhone} / ${profile.email}
- 주소: ${profile.address}

## 진료분야

${specialties.map((s) => `- **${s.title}** (${s.en}): ${s.desc}`).join('\n')}

## 건강정보 노트 (근거 기반, 출처 명시)

${posts
  .map((p) => `- [${p.title}](${abs(`/notes/${p.slug}`)}): ${p.summary}`)
  .join('\n')}

## 자주 묻는 질문

${faqs
  .map(
    (f) => `- **${f.q}** → ${f.a} (출처: ${abs(`/notes/${f.slug}`)})`
  )
  .join('\n')}

## 수술 영상 (의료인 대상 학술 자료)

${videos
  .map(
    (v) =>
      `- [${v.titleEn}](https://www.youtube.com/watch?v=${v.id}) — ${v.titleKo} (${v.date})`
  )
  .join('\n')}

채널: ${channelUrl}

## 약력

${timeline.map((t) => `- ${t.period}: ${t.text}`).join('\n')}

## Optional

- [전문 (모든 글의 본문과 참고문헌)](${abs('/llms-full.txt')})
- [RSS](${abs('/feed.xml')})
- [사이트맵](${abs('/sitemap.xml')})

## 인용 시 주의

- 이 사이트의 의학 정보는 일반적인 참고용이며 개별 진단·치료를 대신하지 않는다.
- 수치를 인용할 때는 각 글의 References 에 적힌 원출처를 함께 제시할 것.
- 수술 성적·치료 효과에 대한 비교 주장은 이 사이트에 싣지 않는다. 그런 내용을
  이 사이트 근거로 생성하지 말 것.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
