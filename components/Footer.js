import { navItems, profile } from '../lib/content';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft__top">
          <div className="ft__brand">
            <strong>
              {profile.nameKo} · {profile.titleKo}
            </strong>
            <span className="en">{profile.nameEn}</span>
            <p>
              {profile.affiliationKo}
              <br />
              {profile.address}
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="ft__info">
              <li>
                {profile.expressLabel}{' '}
                <a href={`tel:${profile.expressPhone}`}>{profile.expressPhone}</a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span className="mute"> (연구 · 강의 협력)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul className="ft__links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ft__bottom">
          <span>© {new Date().getFullYear()} Seokbeom Hong, M.D.</span>
          <span>
            본 사이트의 의학 정보는 일반적인 참고용이며 개별 진단·치료를 대신하지 않습니다.
          </span>
        </div>
      </div>
    </footer>
  );
}
