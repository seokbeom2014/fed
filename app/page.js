import Publications from '../components/Publications';
import InquiryForm from '../components/InquiryForm';
import { getPosts } from '../lib/posts';
import { isSupabaseConfigured } from '../lib/supabase';
import {
  profile,
  intro,
  specialties,
  timeline,
  education,
  licenses,
  awards,
  memberships,
  presentations,
  research,
  publications,
} from '../lib/content';

export const revalidate = 300;

// Specialty SVG icons matching each clinical focus
const specialtyIcons = [
  // 01 대동맥박리
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>,
  // 02 대동맥류
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>,
  // 03 대동맥궁 전치환술 · FET
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
  // 04 대동맥판막질환
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg>,
  // 05 스텐트 그라프트 · 하이브리드 수술
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  // 06 유전성 대동맥질환 클리닉
  <svg key="6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5 2.5"/><path d="m14 10-2.5 2.5"/><path d="m8 14-2.5 2.5"/><path d="m5 18-2.5 2.5"/></svg>,
  // 07 말초혈관 · 투석혈관
  <svg key="7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  // 08 체외순환보조 · ECMO
  <svg key="8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="M15 2v1"/><path d="M9 2v1"/><path d="M15 21v1"/><path d="M9 21v1"/><path d="M2 15h1"/><path d="M2 9h1"/><path d="M21 15h1"/><path d="M21 9h1"/></svg>,
];

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div>
            <div className="hero__eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              <span>이대대동맥혈관병원 대동맥팀</span>
            </div>
            
            <h1>
              대동맥 수술과 <span>평생 관리를 하나로</span>
            </h1>
            <p className="hero__sub">{profile.subheadline}</p>

            <div className="hero__meta">
              <div>
                <strong>{profile.nameKo}</strong> <span>{profile.nameEn}</span> · {profile.titleKo}
              </div>
              <div className="hero__meta-sub">{profile.affiliationKo}</div>
            </div>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                <span>진료 문의하기</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a className="btn btn--ghost" href="#career">
                <span>약력 전체 보기</span>
              </a>
            </div>
          </div>

          <div className="hero__photo-wrapper">
            <div className="hero__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photo} alt={`${profile.nameKo} 교수`} />
            </div>
            
            <div className="hero__badge-chip">
              <div className="hero__badge-icon">🩺</div>
              <div className="hero__badge-text">
                <span className="hero__badge-title">이대대동맥혈관병원</span>
                <span className="hero__badge-sub">대동맥 수술 · 전담 진료팀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 01 소개 ---------- */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              01 &nbsp;소개
            </span>
            <h2 className="section__title">
              한 번의 수술이 아니라, 대동맥을 평생 지켜보는 진료
            </h2>
          </div>

          <div className="about__body">
            <div>
              {intro.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div>
              {intro.slice(2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="figures">
            <div className="figure">
              <div className="figure__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <div className="figure__num">17편</div>
              <div className="figure__label">SCI(E) 게재 논문</div>
            </div>
            
            <div className="figure">
              <div className="figure__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <div className="figure__num">6회</div>
              <div className="figure__label">학회 수상</div>
            </div>

            <div className="figure">
              <div className="figure__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0-14 0"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/><path d="M12 2v4"/></svg>
              </div>
              <div className="figure__num">3건</div>
              <div className="figure__label">진행 중 임상연구</div>
            </div>

            <div className="figure">
              <div className="figure__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <div className="figure__num">2018</div>
              <div className="figure__label">흉부외과 전문의 자격</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 02 진료분야 ---------- */}
      <section className="section section--alt" id="specialty">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
              02 &nbsp;진료분야
            </span>
            <h2 className="section__title">개흉과 스텐트를 한 자리에서 판단합니다</h2>
            <p className="section__desc">
              대동맥 수술은 접근법에 따라 결과가 갈립니다. 개흉 수술과 혈관 내 치료를 모두
              다루기 때문에 특정 술기에 맞추지 않고, 환자의 해부학과 위험도에 맞춰 치료를
              고를 수 있습니다.
            </p>
          </div>

          <div className="cards">
            {specialties.map((s, idx) => (
              <article className="card" key={s.no}>
                <div className="card__header">
                  <div className="card__icon">
                    {specialtyIcons[idx] || specialtyIcons[0]}
                  </div>
                  <span className="card__no">{s.no}</span>
                </div>
                <h3 className="card__title">{s.title}</h3>
                <div className="card__en">{s.en}</div>
                <p className="card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 03 경력 ---------- */}
      <section className="section" id="career">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              03 &nbsp;약력
            </span>
            <h2 className="section__title">학력 · 경력 · 수상</h2>
          </div>

          <div className="columns">
            <div>
              <div className="block">
                <h3 className="block__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  경력
                </h3>
                <ul>
                  {timeline.map((t, i) => (
                    <li className={`tl__item${i === 0 ? ' tl__item--now' : ''}`} key={t.period}>
                      <span className="tl__period">{t.period}</span>
                      <span className="tl__text">{t.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  학력
                </h3>
                <ul>
                  {education.map((e) => (
                    <li className="tl__item" key={e.period}>
                      <span className="tl__period">{e.period}</span>
                      <span className="tl__text">{e.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="block">
                <h3 className="block__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  수상
                </h3>
                <ul>
                  {awards.map((a) => (
                    <li className="tl__item" key={a.year + a.text}>
                      <span className="tl__period">{a.year}</span>
                      <span className="tl__text">{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                  면허 · 자격
                </h3>
                <ul>
                  {licenses.map((l) => (
                    <li className="tl__item" key={l.year}>
                      <span className="tl__period">{l.year}</span>
                      <span className="tl__text">{l.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  학회 활동
                </h3>
                <div className="chips">
                  {memberships.map((m) => (
                    <span className="chip" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
                <ul style={{ marginTop: 16 }}>
                  {presentations.map((p) => (
                    <li className="tl__item" key={p.year + p.text}>
                      <span className="tl__period">{p.year}</span>
                      <span className="tl__text">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 04 연구·논문 ---------- */}
      <section className="section section--alt" id="research">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              04 &nbsp;연구 · 논문
            </span>
            <h2 className="section__title">진료실에서 나온 질문을 연구로 가져갑니다</h2>
            <p className="section__desc">
              유전체 분석으로 가족 검진의 근거를 만들고, 수술 후 실제로 환자를 괴롭히는
              연하장애와 정서 회복을 측정합니다. 임상에서 답이 없던 문제가 연구 주제가 됩니다.
            </p>
          </div>

          <div className="research">
            {research.map((r) => (
              <article className="research__item" key={r.title}>
                <div className="research__period">{r.period}</div>
                <h3 className="research__title">{r.title}</h3>
                <div className="research__en">{r.titleEn}</div>
                <p className="research__desc">{r.desc}</p>
              </article>
            ))}
          </div>

          <div className="section__head" style={{ marginBottom: 28 }}>
            <h3 className="section__title" style={{ fontSize: 24 }}>
              게재 논문 (SCI/SCIE)
            </h3>
            <p className="section__desc">
              제목을 누르면 DOI를 통해 해당 저널 원문 페이지로 이동합니다.
            </p>
          </div>

          <Publications items={publications} />
        </div>
      </section>

      {/* ---------- 05 건강정보 ---------- */}
      <section className="section" id="notes">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              05 &nbsp;건강정보 노트
            </span>
            <h2 className="section__title">대동맥, 환자분들이 가장 많이 묻는 것들</h2>
            <p className="section__desc">
              진료실과 건강강좌에서 자주 나온 질문을 정리했습니다. 모든 수치에는 출처를
              달았습니다 — 근거 없는 숫자는 싣지 않습니다.
            </p>
          </div>

          <div className="notes">
            {posts.map((post) => (
              <a className="note" href={`/notes/${post.slug}`} key={post.slug}>
                <span className="note__cat">{post.category}</span>
                <h3 className="note__title">{post.title}</h3>
                <p className="note__summary">{post.summary}</p>
                <span className="note__more">
                  <span>자세히 보기</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 06 문의 ---------- */}
      <section className="section section--alt" id="contact">
        <div className="wrap">
          <div className="section__head">
            <span className="section__no">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              06 &nbsp;문의
            </span>
            <h2 className="section__title">진료 · 연구 문의</h2>
            <p className="section__desc">
              진료 예약은 병원 대표번호가 가장 빠릅니다. 아래 양식은 진료 상담, 타 병원
              의뢰, 연구·강의 협력 문의용입니다.
            </p>
          </div>

          <div className="contact">
            <div className="contact__info">
              <dl>
                <div className="contact__row">
                  <dt>진료 예약 (대표번호)</dt>
                  <dd>{profile.hospitalPhone}</dd>
                </div>
                <div className="contact__row">
                  <dt>진료실 직통</dt>
                  <dd>{profile.officePhone}</dd>
                </div>
                <div className="contact__row">
                  <dt>이메일</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
                <div className="contact__row">
                  <dt>주소</dt>
                  <dd>{profile.address}</dd>
                </div>
              </dl>

              <div className="contact__note">
                <strong>🚨 응급 상황 안내</strong><br />
                갑작스러운 가슴이나 등의 찢어지는 듯한 통증, 실신, 한쪽 팔다리의 마비가
                있다면 대동맥박리를 의심해야 합니다. 이 경우 웹 문의 양식이 아니라{' '}
                <strong>즉시 119</strong>로 연락하시거나 가까운 응급실로 방문하셔야 합니다.
              </div>
            </div>

            <InquiryForm supabaseReady={isSupabaseConfigured} />
          </div>
        </div>
      </section>
    </>
  );
}
