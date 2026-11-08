import { profile } from '../lib/content';

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const IconCare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function QuickBar() {
  return (
    <>
      {/* 데스크톱 — 하단 고정 안내 바 */}
      <aside className="qbar" aria-label="진료 안내">
        <div className="qbar__today">
          <span className="l">Aortic Team</span>
          <span className="v">{profile.centerKo} 대동맥팀</span>
        </div>
        <div className="qbar__today">
          <span className="l">Emergency</span>
          <span className="v">급성 대동맥박리 24시간 대응</span>
        </div>

        <a className="qbar__tel" href={`tel:${profile.expressPhone}`}>
          <span className="l">{profile.expressLabel}</span>
          <span className="v">{profile.expressPhone}</span>
        </a>
        <a className="qbar__btn" href="/#notes">
          건강정보
        </a>
        <a className="qbar__btn qbar__btn--a" href="/#contact">
          오시는 길
        </a>
      </aside>

      {/* 모바일 — 하단 3분할 바 */}
      <nav className="mbar" aria-label="모바일 빠른 메뉴">
        <a className="mbar__btn" href="/#specialty">
          <IconCare />
          진료분야
        </a>
        <a className="mbar__btn" href="/#contact">
          <IconPin />
          오시는 길
        </a>
        <a className="mbar__btn mbar__btn--a" href={`tel:${profile.expressPhone}`}>
          <IconPhone />
          Express 직통
        </a>
      </nav>
    </>
  );
}
