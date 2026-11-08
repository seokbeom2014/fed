import './globals.css';
import { Marcellus } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuickBar from '../components/QuickBar';
import { profile } from '../lib/content';
import { siteUrl } from '../lib/site';

/* 영문 라벨용 세리프. next/font 로 자체 호스팅해 외부 요청·레이아웃 시프트를 없앤다. */
const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-marcellus',
});

export const metadata = {
  // OG·canonical·사이트맵이 절대 URL 로 풀리도록 기준 도메인을 지정한다.
  metadataBase: new URL(siteUrl),
  title: `${profile.nameKo} | ${profile.affiliationKo} 심장혈관흉부외과`,
  description:
    '대동맥박리·대동맥류·대동맥판막질환 수술과 유전성 대동맥질환 가족 관리. 이대서울병원 이대대동맥혈관병원 심장혈관흉부외과 홍석범 교수.',
  keywords: [
    '홍석범',
    '대동맥',
    '대동맥박리',
    '대동맥류',
    '이대서울병원',
    '이대대동맥혈관병원',
    '심장혈관흉부외과',
    'TEVAR',
    'Frozen Elephant Trunk',
  ],
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: `${profile.nameKo} 건강정보 노트` },
      ],
    },
  },
  openGraph: {
    title: `${profile.nameKo} · ${profile.titleKo}`,
    description: profile.subheadline,
    type: 'profile',
    locale: 'ko_KR',
  },
  verification: {
    other: {
      // 네이버 서치어드바이저. public/naver<토큰>.html 파일 방식과 이중으로 걸어둔다.
      // ※ 확인 필요 — 파일명의 토큰을 그대로 썼다. 서치어드바이저
      //    → 사이트 소유확인 → "HTML 태그" 탭의 content 값과 대조할 것.
      'naver-site-verification': 'f63dfeab2e477d7e86d4209f4d97ac8d',
    },
    // Google 은 meta 태그용 토큰이 파일명 토큰과 다른 값이다(43자 내외).
    // Search Console → 설정 → 소유권 확인 → "HTML 태그" 의 content 를 받아 활성화.
    // google: '...',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={marcellus.variable}>
      <head>
        {/* 본문 — Pretendard Variable */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* 제목 — SUIT Variable */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          본문으로 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuickBar />
      </body>
    </html>
  );
}
