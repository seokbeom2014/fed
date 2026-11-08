/**
 * 사이트의 절대 URL. sitemap.xml · robots.txt · feed.xml · metadataBase 가 공유한다.
 *
 * 우선순위
 *  1) NEXT_PUBLIC_SITE_URL           — 직접 지정. 도메인을 바꾸면 이것만 넣으면 된다.
 *  2) VERCEL_PROJECT_PRODUCTION_URL  — Vercel 이 주입하는 프로덕션 도메인
 *  3) VERCEL_URL                     — 배포별 URL (프리뷰 포함). 2)가 없을 때의 보험.
 *  4) PRODUCTION_DOMAIN              — 아래 상수. 운영 기본값.
 *  5) http://localhost:3000          — 개발 서버
 *
 * apex(fedpapa.com)는 Vercel 에서 308 로 www 로 넘어간다. 색인 대상은 www 쪽이므로
 * 정본은 www 를 쓴다. (2026-11-08 확인)
 */
const PRODUCTION_DOMAIN = 'https://www.fedpapa.com';

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : PRODUCTION_DOMAIN;
}

export const siteUrl = resolveSiteUrl().replace(/\/+$/, '');

/** 절대 URL 만들기. `abs('/notes/foo')` → `https://www.fedpapa.com/notes/foo` */
export function abs(path = '/') {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
