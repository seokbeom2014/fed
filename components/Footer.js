import { navItems, profile } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__name">
              {profile.nameKo} <span style={{ opacity: 0.7, fontWeight: 500, fontSize: '15px' }}>({profile.nameEn})</span>
            </div>
            <p className="footer__aff">
              {profile.titleKo}
              <br />
              {profile.affiliationKo}
            </p>
          </div>

          <div>
            <h4>CONTACT</h4>
            <ul>
              <li>{profile.address}</li>
              <li>진료실 {profile.officePhone}</li>
              <li>대표·예약 {profile.hospitalPhone}</li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>NAVIGATION</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Seokbeom Hong, M.D. All rights reserved.</span>
          <span>
            본 사이트의 의학 정보는 일반적인 참고용이며 개별 진단·치료를 대신하지 않습니다.
          </span>
        </div>
      </div>
    </footer>
  );
}
