# 홍석범 교수 홈페이지

이대서울병원 심장혈관흉부외과 홍석범 교수 개인 홈페이지.
`yoolaw.vercel.app` 구조(단일 페이지 + 번호 매긴 섹션 + 카드 레이아웃)를 참고했습니다.

- **Frontend**: Next.js 15 (App Router) + 순수 CSS (프레임워크 없음)
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
`lib/content.js`의 `seedPosts`를 쓰고, 문의 폼만 비활성 안내가 뜹니다.

---

## 2. Supabase 연결

1. [supabase.com](https://supabase.com)에서 프로젝트 생성 (region: Northeast Asia (Seoul))
2. **SQL Editor**에 `supabase/schema.sql` 전체를 붙여넣고 실행
   - `posts`, `inquiries` 테이블 + RLS 정책 + 건강정보 글 6편 seed가 한 번에 들어갑니다
3. **Project Settings → API**에서 키를 복사해 `.env.local` 생성

```bash
cp .env.local.example .env.local
```

| 변수 | 용도 | 노출 |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 프로젝트 URL | 공개 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 글 읽기 (RLS로 보호) | 공개 |
| `SUPABASE_SERVICE_ROLE_KEY` | 문의 저장 (서버 전용) | **비공개** |

4. `npm run dev` 재시작

### 데이터 흐름

| 대상 | 테이블 | 접근 |
|---|---|---|
| 건강정보 노트 | `posts` | anon SELECT (`is_published = true`만) |
| 문의 접수 | `inquiries` | 서버 라우트가 service_role로 INSERT. **SELECT 정책 없음 → 웹에서 열람 불가**, Supabase 대시보드에서만 확인 |

문의 내용은 일반에 노출되지 않도록 읽기 정책을 아예 만들지 않았습니다.

---

## 3. 배포 (Vercel)

```bash
npm i -g vercel
vercel
```

Vercel 프로젝트 설정 → Environment Variables에 위 3개 변수를 등록합니다.
`SUPABASE_SERVICE_ROLE_KEY`는 반드시 `NEXT_PUBLIC_` 접두어 **없이** 넣으세요.

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
- [ ] **진료실 전화 `02-6986-2110`** — CV 기재값. 외부 공개 여부 확인
- [ ] **이메일 `seokbeom2014@gmail.com`** — 개인 메일입니다. 공개용 주소를 따로 쓸지 결정
- [ ] **직위 표기** — CV 영문은 "Assistant Professor of Clinical Practice", 병원 양식 국문은 "진료조교수"로 통일했습니다. 병원 공식 표기와 대조 필요
- [ ] **논문 17편** — CV 기준. PubMed로 최신 목록 재확인 권장 (`verify-references` 스킬 사용 가능)
- [ ] **의료광고 심의** — 의료법상 의료인의 홈페이지도 의료광고에 해당할 수 있습니다. 수술 성적·비교 표현을 추가하실 경우 사전심의 대상인지 병원 홍보팀과 확인하세요. 현재 사이트에는 성적 수치나 비교 표현을 넣지 않았습니다.
