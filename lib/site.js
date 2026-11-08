/**
 * 사이트의 절대 URL. sitemap.xml · robots.txt · metadataBase 가 공유한다.
 *
 * 우선순위
 *  1) NEXT_PUBLIC_SITE_URL           — 직접 지정. 커스텀 도메인이 있으면 반드시 이걸 쓴다.
 *  2) VERCEL_PROJECT_PRODUCTION_URL  — Vercel 이 주입하는 프로덕션 도메인
 *  3) VERCEL_URL                     — 배포별 URL (프리뷰 포함). 2)가 없을 때의 보험.
 *  4) http://localhost:3000          — 로컬 개발
 *
 * 사이트맵의 <loc> 는 실제 공개 도메인이어야 색인됩니다.
 * 운영에서 1) 을 비워두면 아래 경고가 빌드 로그에 찍히니 그때 채우면 됩니다.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  // 운영 빌드인데 도메인을 못 찾았다 — localhost 사이트맵이 제출되는 사고를 막기 위해 알린다.
  if (process.env.NODE_ENV === 'production') {
    console.warn(
      '[site] 공개 도메인을 찾지 못해 localhost 로 떨어집니다. ' +
        'NEXT_PUBLIC_SITE_URL 환경변수를 설정하세요 (sitemap.xml 의 URL 이 잘못 생성됩니다).'
    );
  }
  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl().replace(/\/+$/, '');

/** 절대 URL 만들기. `abs('/notes/foo')` → `https://.../notes/foo` */
export function abs(path = '/') {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
