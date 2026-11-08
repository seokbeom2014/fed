'use client';

import { useEffect, useState } from 'react';
import { navItems, profile } from '../lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  // 드로어가 열려 있는 동안 배경 스크롤을 막는다.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={open ? 'hd hd--open' : 'hd'}>
        <div className="wrap hd__in">
          <a className="logo" href="/" aria-label="홈으로">
            <span className="logo__name">{profile.nameKo}</span>
            <span className="logo__en">Aortic Surgery</span>
          </a>

          <nav className="gn" aria-label="주 메뉴">
            <ul className="gn__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="gn__item" href={`/${item.href}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hd__right">
            <a className="hd__tel" href={`tel:${profile.expressPhone}`}>
              <span className="l">Express 직통</span>
              <span className="v">{profile.expressPhone}</span>
            </a>
            <button
              className="hd__burger"
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mdrawer"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={open ? 'mdrawer mdrawer--open' : 'mdrawer'}
        id="mdrawer"
        hidden={!open}
      >
        <nav className="mdrawer__sec" aria-label="모바일 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} onClick={close}>
              {item.label}
              <span>{item.en}</span>
            </a>
          ))}
        </nav>

        <div className="mdrawer__tel">
          <a className="btn btn--primary" href={`tel:${profile.expressPhone}`}>
            {profile.expressLabel} {profile.expressPhone}
          </a>
        </div>
      </div>
    </>
  );
}
