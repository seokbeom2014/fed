import Publications from '../components/Publications';
import { getPosts } from '../lib/posts';
import {
  profile,
  introLead,
  intro,
  specialties,
  journey,
  faqs,
  timeline,
  education,
  licenses,
  awards,
  memberships,
  presentations,
  research,
  publications,
  videos,
  channelUrl,
} from '../lib/content';

export const revalidate = 300;

/* 진료분야 8개에 대응하는 라인 아이콘 */
const specialtyIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v8a6 6 0 0 0 12 0V3" /><ellipse cx="12" cy="13" rx="6" ry="4.5" /><path d="M12 17.5V21" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V9a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3" /><path d="M15 12h4" /><path d="M15 16h4" /><path d="M15 20h4" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /><path d="M12 3a9 9 0 0 1 0 18" /><path d="M3 12h18" /></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v18" /><path d="M16 3v18" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h8" /><path d="M8 19h8" /></svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" /><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /><path d="m17 6-2.5 2.5" /><path d="m14 10-2.5 2.5" /><path d="m8 14-2.5 2.5" /><path d="m5 18-2.5 2.5" /></svg>,
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8v8" /><path d="M20 8v8" /><rect x="7" y="6" width="10" height="12" rx="1" /><path d="M10 12h4" /></svg>,
];

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" aria-label="대표 문구">
        <div className="hero__in">
          <span className="hero__en">Aortic Surgery · Ewha Seoul</span>
          <h1 className="hero__h">
            대동맥을 <em>평생 관리하는</em>
            <br />
            심장혈관흉부외과 의사
          </h1>
          <span className="hero__rule" />
          <p className="hero__p">{profile.subheadline}</p>
          <p className="hero__meta">
            <strong>
              {profile.nameKo} {profile.titleKo}
            </strong>
            <br />
            {profile.affiliationKo}
          </p>
          <div className="hero__btns">
            <a className="btn btn--primary" href="#specialty">
              진료분야
            </a>
            <a className="btn" href="#about">
              의료진 소개
            </a>
          </div>
        </div>
      </section>

      {/* ============ 자격 요약 스트립 ============ */}
      <section className="sec sec--alt" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="wrap">
          <div className="info">
            <div>
              <div className="l">Publications</div>
              <div className="v">{publications.length}편</div>
              <div className="s">SCI(E) 게재 논문</div>
            </div>
            <div>
              <div className="l">Awards</div>
              <div className="v">{awards.length}회</div>
              <div className="s">학회 수상</div>
            </div>
            <div>
              <div className="l">Ongoing Research</div>
              <div className="v">{research.length}건</div>
              <div className="s">진행 중 임상연구</div>
            </div>
            <div>
              <div className="l">Board Certified</div>
              <div className="v">2018</div>
              <div className="s">흉부외과 전문의</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 01 진료분야 (Signature) ============ */}
      <section className="sec" id="specialty">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">Signature Care</span>
            <h2 className="sec-title">
              개흉과 스텐트를 <em>한 자리에서</em> 판단합니다
            </h2>
            <p className="sec-sub">
              대동맥을 중심으로 판막·말초혈관·체외순환보조까지, 실제로 진료하는 영역만
              적었습니다.
            </p>
          </div>

          <ul className="sig">
            {specialties.map((s, i) => (
              <li key={s.no}>
                <article className="sigCard">
                  <div className="sigFig">
                    <span className="no">{s.no}</span>
                    {specialtyIcons[i]}
                  </div>
                  <div className="sigText">
                    <span className="sigEn">{s.en}</span>
                    <strong>{s.title}</strong>
                    <p className="sigDesc">{s.desc}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 02 소개 (Doctor band) ============ */}
      <section className="sec docBand" id="about">
        <div className="wrap">
          <div className="docIn">
            <div className="docText">
              <span className="eyebrow">About</span>
              <p className="docCopy">{introLead}</p>
              <div className="docList">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="docSign">
                <div>
                  <span>{profile.affiliationKo}</span>
                  <span className="en">{profile.titleEn}</span>
                </div>
                <div>
                  <strong>{profile.nameKo}</strong>{' '}
                  <span className="en" style={{ display: 'inline' }}>
                    {profile.nameEn}
                  </span>
                </div>
              </div>
            </div>

            <figure className="docImg">
              <img
                src={profile.photo}
                alt={`${profile.nameKo} ${profile.titleKo}`}
                width="800"
                height="800"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ============ 03 진료 흐름 (Journey) ============ */}
      <section className="sec" id="flow">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">Patient Journey</span>
            <h2 className="sec-title">예약에서 장기 추적까지</h2>
            <p className="sec-sub">
              예약부터 영상 확인, 치료 방침 결정, 수술, 그리고 퇴원 후 영상 추적까지의
              흐름입니다.
            </p>
          </div>

          <ol className="steps">
            {journey.map((j) => (
              <li key={j.no}>
                <span className="n">{j.no}</span>
                <strong>{j.title}</strong>
                <p>{j.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 04 약력 ============ */}
      <section className="sec sec--alt" id="career">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">Career</span>
            <h2 className="sec-title">학력 · 경력 · 수상</h2>
          </div>

          <div className="cols">
            <div>
              <div className="nblock">
                <div className="nblock__h">
                  <strong>경력</strong>
                  <span>Appointments</span>
                </div>
                <ul className="nlist">
                  {timeline.map((t, i) => (
                    <li className={i === 0 ? 'now' : undefined} key={t.period}>
                      <span className="n">{t.period}</span>
                      <span className="t">{t.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nblock">
                <div className="nblock__h">
                  <strong>학력</strong>
                  <span>Education</span>
                </div>
                <ul className="nlist">
                  {education.map((e) => (
                    <li key={e.period}>
                      <span className="n">{e.period}</span>
                      <span className="t">{e.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="nblock">
                <div className="nblock__h">
                  <strong>수상</strong>
                  <span>Awards</span>
                </div>
                <ul className="nlist">
                  {awards.map((a) => (
                    <li key={a.year + a.text}>
                      <span className="n">{a.year}</span>
                      <span className="t">{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nblock">
                <div className="nblock__h">
                  <strong>면허 · 자격</strong>
                  <span>Licenses</span>
                </div>
                <ul className="nlist">
                  {licenses.map((l) => (
                    <li key={l.year}>
                      <span className="n">{l.year}</span>
                      <span className="t">{l.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nblock">
                <div className="nblock__h">
                  <strong>학회 활동</strong>
                  <span>Societies</span>
                </div>
                <div className="chips">
                  {memberships.map((m) => (
                    <span className="chip" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
                <ul className="nlist" style={{ marginTop: '1rem' }}>
                  {presentations.map((p) => (
                    <li key={p.year + p.text}>
                      <span className="n">{p.year}</span>
                      <span className="t">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 연구 · 논문 ============ */}
      <section className="sec" id="research">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">Research</span>
            <h2 className="sec-title">
              진료실에서 나온 질문을 <em>연구로</em> 가져갑니다
            </h2>
            <p className="sec-sub">
              유전체 분석으로 가족 검진의 근거를 만들고, 수술 후 실제로 환자를 괴롭히는
              연하장애와 정서 회복을 측정합니다.
            </p>
          </div>

          <div className="nblock">
            <div className="nblock__h">
              <strong>진행 중 연구</strong>
              <span>Ongoing</span>
            </div>
            <div className="rs">
              {research.map((r) => (
                <article className="rs__item" key={r.title}>
                  <div className="rs__period">{r.period}</div>
                  <h3 className="rs__title">{r.title}</h3>
                  <div className="rs__en">{r.titleEn}</div>
                  <p className="rs__desc">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="nblock">
            <div className="nblock__h">
              <strong>게재 논문 (SCI/SCIE)</strong>
              <span>Publications</span>
            </div>
            <p className="sec-sub" style={{ marginBottom: '1.5rem' }}>
              제목을 누르면 DOI를 통해 해당 저널 원문 페이지로 이동합니다.
            </p>
            <Publications items={publications} />
          </div>
        </div>
      </section>

      {/* ============ 06 수술 영상 ============ */}
      <section className="sec sec--alt" id="videos">
        <div className="wrap">
          <div className="stitle stitle--row">
            <div>
              <span className="eyebrow">Surgical Video</span>
              <h2 className="sec-title">수술 영상</h2>
              <p className="sec-sub">
                학회 발표와 수기 공유를 위해 기록한 수술 영상입니다. 의료인을 대상으로 한
                학술 자료이며, 환자 교육용 설명 영상이 아닙니다.
              </p>
            </div>
            <a
              className="more"
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube 채널
            </a>
          </div>

          <p className="notice" style={{ marginTop: 0, marginBottom: '2rem' }}>
            <strong>안내</strong>
            <br />
            아래 영상에는 실제 수술 장면이 포함되어 있습니다. 재생하기 전에 참고해
            주세요.
          </p>

          <ul className="vids">
            {videos.map((v) => (
              <li className="vid" key={v.id}>
                <div className="vid__frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                    title={v.titleEn}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="vid__text">
                  <time className="vid__date" dateTime={v.date}>
                    {v.date}
                  </time>
                  <h3 className="vid__title">{v.titleKo}</h3>
                  <p className="vid__en">{v.titleEn}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 07 FAQ ============ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">FAQ</span>
            <h2 className="sec-title">진료실에서 가장 많이 듣는 질문</h2>
            <p className="sec-sub">
              모든 수치에는 출처를 달았습니다 — 근거 없는 숫자는 싣지 않습니다.
            </p>
          </div>

          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                </summary>
                <div className="faq__a">
                  {f.a}{' '}
                  <a href={`/notes/${f.slug}`}>출처와 함께 자세히 보기 →</a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 08 건강정보 노트 ============ */}
      <section className="sec sec--alt" id="notes">
        <div className="wrap">
          <div className="stitle stitle--row">
            <div>
              <span className="eyebrow">Notes</span>
              <h2 className="sec-title">건강정보 노트</h2>
              <p className="sec-sub">
                진료실과 건강강좌에서 자주 나온 질문을 근거와 함께 정리했습니다.
              </p>
            </div>
            <a className="more" href="/feed.xml">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" fill="currentColor" />
              </svg>
              RSS 구독
            </a>
          </div>

          <div className="notes">
            {posts.map((post) => (
              <a className="note" href={`/notes/${post.slug}`} key={post.slug}>
                <span className="note__cat">{post.category}</span>
                <h3 className="note__title">{post.title}</h3>
                <p className="note__summary">{post.summary}</p>
                <span className="note__more">자세히 보기 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 오시는 길 ============ */}
      <section className="sec" id="contact">
        <div className="wrap">
          <div className="stitle">
            <span className="eyebrow">Contact</span>
            <h2 className="sec-title">오시는 길</h2>
            <p className="sec-sub">
              진료 예약과 상담은 이대서울병원 심장혈관흉부외과 외래로 신청해 주세요.
            </p>
          </div>

          <div className="loc">
            <div className="locInfo">
              <dl>
                <div>
                  <dt>Express 직통</dt>
                  <dd>
                    <a href={`tel:${profile.expressPhone}`}>{profile.expressPhone}</a>
                    <span className="mute"> ({profile.expressLabel})</span>
                  </dd>
                </div>
                <div>
                  <dt>진료과</dt>
                  <dd>심장혈관흉부외과 · 이대대동맥혈관병원 대동맥팀</dd>
                </div>
                <div>
                  <dt>주소</dt>
                  <dd>{profile.address}</dd>
                </div>
                <div>
                  <dt>이메일</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    <span className="mute"> (연구 · 강의 협력)</span>
                  </dd>
                </div>
              </dl>

              <div className="locBtns">
                <a
                  className="btn"
                  href="https://map.naver.com/p/search/이대서울병원"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  네이버 지도에서 보기
                </a>
                <a className="btn btn--primary" href={`tel:${profile.expressPhone}`}>
                  Express 직통으로 전화
                </a>
              </div>
            </div>

            <div>
              <div className="notice">
                <strong>응급 상황 안내</strong>
                <br />
                갑작스러운 가슴이나 등의 찢어지는 듯한 통증, 실신, 한쪽 팔다리의 마비가
                있다면 대동맥박리를 의심해야 합니다. 이 경우 <strong>즉시 119</strong>로
                연락하시거나 가까운 응급실로 방문하셔야 합니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
