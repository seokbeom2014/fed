import { abs } from '../lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // 네이버 검색 로봇. 서치어드바이저가 Yeti 로 수집한다.
      {
        userAgent: 'Yeti',
        allow: '/',
      },
    ],
    sitemap: abs('/sitemap.xml'),
  };
}
