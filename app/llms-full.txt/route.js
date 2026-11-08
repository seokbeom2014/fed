import { getPosts } from '../../lib/posts';
import { profile, intro, introLead, specialties, journey } from '../../lib/content';
import { abs } from '../../lib/site';

export const revalidate = 3600;

/**
 * llms-full.txt — 건강정보 노트 전문을 마크다운으로 한 파일에 담는다.
 * 답변 엔진이 여러 페이지를 돌지 않고 근거까지 한 번에 읽게 하는 것이 목적.
 */
export async function GET() {
  const { posts } = await getPosts();

  const noteSections = posts
    .map((post) => {
      const body = Array.isArray(post.body)
        ? post.body
        : String(post.body || '').split('\n\n');
      const refs = Array.isArray(post.refs) ? post.refs.filter(Boolean) : [];

      return `## ${post.title}

- URL: ${abs(`/notes/${post.slug}`)}
- 분류: ${post.category || '-'}
- 작성일: ${post.published_at || '-'}
- 요약: ${post.summary}

${body.filter(Boolean).join('\n\n')}

### References

${refs.length ? refs.map((r, i) => `${i + 1}. ${r}`).join('\n') : '(없음)'}
`;
    })
    .join('\n---\n\n');

  const body = `# ${profile.nameKo} (${profile.nameEn}) — 전문

출처: ${abs('/')}
소속: ${profile.affiliationKo} 심장혈관흉부외과
직위: ${profile.titleKo}

이 문서는 사이트의 건강정보 노트 전문과 참고문헌을 한 파일로 모은 것이다.
수치를 인용할 때는 각 글의 References 에 적힌 원출처를 함께 제시할 것.

---

# 소개

${introLead}

${intro.join('\n\n')}

---

# 진료분야

${specialties
  .map((s) => `## ${s.title} (${s.en})\n\n${s.desc}`)
  .join('\n\n')}

---

# 진료 흐름

${journey.map((j) => `${j.no}. **${j.title}** — ${j.desc}`).join('\n')}

---

# 건강정보 노트 전문

${noteSections}

---

# 면책

이 문서의 의학 정보는 일반적인 참고용이며 개별 환자의 진단이나 치료를 대신하지
않는다. 수술 성적·치료 효과에 대한 비교 주장은 포함하지 않는다.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
