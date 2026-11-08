# 홍석범 교수 홈페이지

이대서울병원 심장혈관흉부외과 홍석범 교수 개인 홈페이지.
`mymediart.co` 의 디자인 체계(각진 에디토리얼 · 버건디 accent · 1340px 그리드 · SUIT/Pretendard/Marcellus)를 기준으로 재구성했습니다.

- **Frontend**: Next.js 16 (App Router) + 순수 CSS (프레임워크 없음)
- **Backend**: Supabase (PostgreSQL + RLS)

---

## 1. 실행

```bash
cd "C:\Users\홍석범\Desktop\RenaAI\profhong-site"
npm install
npm run dev
```

→ http://localhost:3000

**Supabase 없이도 그대로 돕니다.** 환경변수가 없으면 건강정보 글은
`lib/content.js`의 `seedPosts`를 씁니다.

---

## 2. Supabase 연결

1. [supabase.com](https://supabase.com)에서 프로젝트 생성 (region: Northeast Asia (Seoul))
2. **SQL Editor**에 `supabase/schema.sql` 전체를 붙여넣고 실행
   - `posts` 테이블 + RLS 정책 + 건강정보 글 6편 seed가 들어갑니다
   - `schema.sql`에 남아 있는 `inquiries` 테이블은 **현재 사이트에서 쓰지 않습니다** (문의 기능 삭제). 이미 생성해 두셨다면 접수된 내용이 있는지 확인한 뒤 drop 여부를 결정하세요.
3. **Project Settings → API**에서 키를 복사해 `.env.local` 생성

```bash
cp .env.local.example .env.local
```

| 변수 | 용도 | 노출 |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 프로젝트 URL | 공개 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 글 읽기 (RLS로 보호) | 공개 |
| `NEXT_PUBLIC_SITE_URL` | `sitemap.xml`·`robots.txt`·OG 태그의 절대 URL 기준 | 공개 |

4. `npm run dev` 재시작

### 데이터 흐름

| 대상 | 테이블 | 접근 |
|---|---|---|
| 건강정보 노트 | `posts` | anon SELECT (`is_published = true`만) |

읽기 전용입니다. 사이트에서 개인정보를 수집하는 경로는 없습니다.

---

## 3. 배포 (Vercel)

```bash
npm i -g vercel
vercel
```

Vercel 프로젝트 설정 → Environment Variables에 위 변수들을 등록합니다.

정본 도메인은 **`https://www.fedpapa.com`** 입니다(apex 는 Vercel 에서 308 → www).
`lib/site.js` 에 기본값으로 박혀 있으니 환경변수 없이도 맞게 생성됩니다.
도메인을 바꿀 때는 `NEXT_PUBLIC_SITE_URL` 만 넣으면 전체가 따라갑니다.

### SEO 경로

| 경로 | 생성 위치 |
|---|---|
| `/sitemap.xml` | `app/sitemap.js` — 홈 + 건강정보 노트 전체(Supabase 글 포함), 1시간마다 재생성 |
| `/robots.txt` | `app/robots.js` — 전체 허용 + 네이버 `Yeti` 명시, Sitemap 경로 포함 |
| `/feed.xml` | `app/feed.xml/route.js` — RSS 2.0. 본문 전문을 `content:encoded` 로 싣고, `<head>` 에 자동발견 링크가 걸림 |
| `/google…html`, `/naver…html` | `public/` 소유확인 파일 |

사이트맵 제출: Google Search Console → 색인 → Sitemaps, 네이버 서치어드바이저 →
요청 → 사이트맵 제출. 둘 다 `sitemap.xml` 경로를 넣습니다.

---

## 4. 콘텐츠 수정

| 무엇 | 어디 |
|---|---|
| 프로필·연락처 | `lib/content.js` → `profile` |
| 소개 문단 | `lib/content.js` → `intro` |
| 진료분야 8개 카드 | `lib/content.js` → `specialties` |
| 경력·학력·수상·학회 | `lib/content.js` → `timeline`, `education`, `awards`, `memberships` |
| 진행 중 연구 | `lib/content.js` → `research` |
| 논문 목록 | `lib/content.js` → `publications` |
| 건강정보 글 | Supabase `posts` 테이블 (없으면 `seedPosts`) |
| 색·타이포 | `app/globals.css` 상단 `:root` 토큰 |
| 프로필 사진 | `public/profile.jpg` 교체 |

---

## 5. 콘텐츠 출처

`RenaAI/ProfHong_md` 아카이브에서 가져왔습니다.

- `이대서울 2026/Ewha_Research/Hong Seok Beom-CV-2026(English).docx.md` — 가장 최신 CV (경력·논문·수상·연구)
- `Downloads/EUMC_의사프로필_작성양식.xlsx.md` — 병원 제출 프로필 (전문진료분야·재직 기간)
- `이대서울 2026/이대대동맥혈관병원 건강강좌/2026_강좌_팩트시트_검증완료.md.md` — 건강정보 노트의 수치와 참고문헌

### 실을 때 걸러낸 것

- **`ProfHong_md_PHI/` 폴더는 읽지도, 싣지도 않았습니다.** 환자 정보이므로 공개 사이트에 들어갈 수 없습니다.
- `VECVS 임상 연구 현황` PDF의 IRB 진행 연구 상세(의뢰기관·목표대상자수 등)는 미공개 정보라 제외했고, 본인 CV에 기재된 연구 3건만 실었습니다.
- 아카이브의 `홍석범_교수_프로필.html`(외부 조사 문서)에는 "출신 학교: 가톨릭대학교 의과대학"처럼 본인 CV와 어긋나는 항목이 있어 쓰지 않았습니다. 학력은 CV 원본(가천대 생명과학부 → 가톨릭대 의전원)을 따랐습니다.

---

## 6. 게시 전 확인이 필요한 항목

- [ ] **프로필 사진** — 현재 `public/profile.jpg`는 2022년 사원증 사진입니다. 공개용 사진으로 교체 권장
- [x] **전화번호** — 대표번호(`1666-5000`)·진료실 직통(`02-6986-2110`)은 삭제했고, **이대대동맥센터 Express 교수 직통 `010-2532-1198`** 1개만 싣습니다 (`profile.expressPhone`).
- [ ] **Express 직통번호 공개 범위** — 개인 휴대전화 번호입니다. 공개 웹페이지에 올리면 크롤링·스팸 대상이 되므로, 전화 받는 대상(환자 / 타 병원 의뢰)을 문구로 한정할지 검토
- [x] **진료 문의 폼** — 삭제했습니다. 양식·`/api/inquiry` 엔드포인트·service_role 키 의존 모두 제거.
- [ ] **이메일 `seokbeom2014@gmail.com`** — 개인 메일입니다. 공개용 주소로 바꿀지 결정 필요
- [ ] **외래 요일·시간** — `components/QuickBar.js`의 `TODO` 자리. 넣을지 결정
- [ ] **지도 링크** — 현재 네이버 지도 검색 URL입니다. 병원 공식 "오시는 길" 페이지 URL로 교체 권장
- [ ] **직위 표기** — CV 영문은 "Assistant Professor of Clinical Practice", 병원 양식 국문은 "진료조교수"로 통일했습니다. 병원 공식 표기와 대조 필요
- [ ] **논문 17편** — CV 기준. PubMed로 최신 목록 재확인 권장 (`verify-references` 스킬 사용 가능)
- [ ] **수술 영상 4편** — YouTube 채널(`@seokbeomHong-zv4pl`) 전체를 `#videos` 섹션에 삽입했습니다. 전부 실제 수술 장면이 포함된 학술 영상이라, 환자가 보는 공개 페이지에 올리는 것이 의료광고 사전심의 대상인지 **병원 홍보팀 확인 권장**. 영상 목록은 `lib/content.js` 의 `videos` 에 있고, 채널에 새 영상이 올라가면 수동으로 추가해야 합니다(빌드 시 자동 수집하지 않음).
- [ ] **의료광고 심의** — 의료법상 의료인의 홈페이지도 의료광고에 해당할 수 있습니다. 수술 성적·비교 표현을 추가하실 경우 사전심의 대상인지 병원 홍보팀과 확인하세요. 현재 사이트에는 성적 수치나 비교 표현을 넣지 않았습니다.
