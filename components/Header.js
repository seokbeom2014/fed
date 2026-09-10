'use client';

import { useState } from 'react';
import { navItems, profile } from '../lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="/" className="logo" aria-label="홈으로">
          <div className="logo__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span className="logo__name">{profile.nameKo}</span>
          <span className="logo__dept">심장혈관흉부외과</span>
        </a>

        <nav className={open ? 'nav nav--open' : 'nav'}>
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header__cta" href="/#contact">
          <span>진료 문의</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="메뉴 열기"
        >
          {open ? '닫기 ✕' : '메뉴 ☰'}
        </button>
      </div>
    </header>
  );
}
