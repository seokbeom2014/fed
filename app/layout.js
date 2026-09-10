import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { profile } from '../lib/content';

export const metadata = {
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
  openGraph: {
    title: `${profile.nameKo} · ${profile.titleKo}`,
    description: profile.subheadline,
    type: 'profile',
    locale: 'ko_KR',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
