-- ============================================================
--  홍석범 교수 홈페이지 — Supabase 스키마
--  Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

-- ------------------------------------------------------------
-- 1. posts : 건강정보 노트
-- ------------------------------------------------------------
create table if not exists public.posts (
  id            bigint generated always as identity primary key,
  slug          text        not null unique,
  title         text        not null,
  summary       text,
  category      text,
  body          jsonb       not null default '[]'::jsonb,  -- 문단 배열
  refs          jsonb       not null default '[]'::jsonb,  -- 참고문헌 배열
  is_published  boolean     not null default true,
  published_at  date        not null default current_date,
  created_at    timestamptz not null default now()
);

create index if not exists posts_published_idx
  on public.posts (is_published, published_at desc);

-- ------------------------------------------------------------
-- 2. inquiries : 문의 접수
-- ------------------------------------------------------------
create table if not exists public.inquiries (
  id          bigint generated always as identity primary key,
  name        text        not null,
  email       text        not null,
  phone       text,
  topic       text,
  message     text        not null,
  is_handled  boolean     not null default false,
  created_at  timestamptz not null default now()
);

create index if not exists inquiries_created_idx
  on public.inquiries (created_at desc);

-- ============================================================
--  RLS (Row Level Security)
-- ============================================================
alter table public.posts     enable row level security;
alter table public.inquiries enable row level security;

-- posts: 공개된 글만 누구나 읽기 가능
drop policy if exists "posts_public_read" on public.posts;
create policy "posts_public_read"
  on public.posts for select
  to anon, authenticated
  using (is_published = true);

-- inquiries: 아무도 읽을 수 없다 (service_role만 우회).
--   → 접수 내용은 Supabase 대시보드에서만 확인하세요.
--
--   INSERT 정책은 일부러 만들지 않습니다.
--   서버 라우트가 SUPABASE_SERVICE_ROLE_KEY 로 삽입하며,
--   service_role 은 RLS 를 우회하므로 정책이 필요 없습니다.
--   ★ service_role 키를 쓰지 않고 anon 키로만 운영하려면
--     아래 두 줄의 주석을 풀어 anon INSERT 를 허용해야 합니다.
--     (단, 그 경우 스팸 방지 수단을 따로 두는 편이 좋습니다.)
--
-- create policy "inquiries_anon_insert"
--   on public.inquiries for insert to anon with check (true);

-- ============================================================
--  seed : 건강정보 노트 6편
--  (내용 출처: 2026 대동맥혈관병원 건강강좌 근거 검증 팩트시트)
-- ============================================================
insert into public.posts (slug, title, summary, category, published_at, body, refs) values
(
  'family-history-two-kinds',
  '가족력에는 두 종류가 있습니다',
  '유전자 하나로 설명되는 증후군성 대동맥질환과, "집안 내력" 수준의 비증후군성 가족력은 대응이 다릅니다.',
  '가족력',
  '2026-06-10',
  jsonb_build_array(
    '대동맥질환의 가족력은 크게 두 갈래입니다.',
    '첫째, 강한 유전성(증후군성)입니다. 말판증후군(FBN1), 로이스-디츠증후군(TGFBR1/2 등), 혈관형 엘러스-단로스증후군(COL3A1), 가족성 비증후군성 TAAD(ACTA2 등)가 여기에 속합니다. 대부분 상염색체 우성이라 자녀에게 약 50% 전달되고, 젊은 나이에 발병하며 수술을 권하는 대동맥 크기 기준도 4.5~5.0cm로 더 낮습니다. 유전상담과 유전자검사, 그리고 가족 단위의 연쇄 선별검사(cascade screening)가 필요합니다.',
    '둘째, 훨씬 흔한 비증후군성 가족력입니다. 말판증후군이 아닌 흉부대동맥류·박리 환자의 21.5%가 가족성이었다는 보고가 있습니다(Albornoz G, Coady MA, et al. Ann Thorac Surg 2006;82:1400-5). 다섯 명 중 한 명꼴입니다. 이 경우 위험이 올라가는 것이지 50%처럼 확정적인 숫자는 아니며, 직계가족에게 권하는 것은 유전자검사보다 영상검진입니다.',
    '이첨대동맥판막(BAV)은 따로 언급할 만합니다. 유전율이 89%에 이르고 직계가족의 약 9%에서 발견됩니다(Cripe L, et al. J Am Coll Cardiol 2004;44:138-43). 인구의 1~2%가 가지고 있고 대동맥이 함께 늘어날 수 있어, 진단되면 직계가족의 심초음파 선별이 권고됩니다.'
  ),
  jsonb_build_array(
    'Albornoz G, Coady MA, et al. Ann Thorac Surg. 2006;82:1400-5.',
    'Cripe L, et al. J Am Coll Cardiol. 2004;44:138-43.',
    'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.'
  )
),
(
  'why-earlier-is-better',
  '미리 하면 2%, 터진 뒤에는 20~80%',
  '예약 수술과 응급 상황의 사망률 차이는 10배가 넘습니다. 대동맥질환에서 "미리"가 중요한 이유입니다.',
  '치료',
  '2026-06-10',
  jsonb_build_array(
    '대동맥질환에서 시점의 차이는 곧 생존의 차이입니다.',
    '계획된(elective) 상행대동맥 수술의 사망률은 약 2%입니다(STS Adult Cardiac Surgery Database, 2011–2016, n=53,559). 복부대동맥류의 예약 수술도 스텐트(EVAR) 약 1.6%, 개복 약 4.8% 수준입니다.',
    '반면 급성 A형 대동맥박리는 수술을 해도 사망률이 26%, 수술하지 않으면 58%로 보고되었습니다(Hagan PG, et al. IRAD. JAMA 2000;283:897). 최근 IRAD 자료에서는 수술 사망률이 약 18%까지 낮아졌지만, 여전히 예약 수술의 10배 수준입니다.',
    '파열된 복부대동맥류는 더 냉정합니다. 전체 사망률 81%, 그중 32%는 병원에 도착하기 전에 사망합니다(Reimerink JJ, et al. Br J Surg 2013;100:1405).',
    '요약하면 미리 계획해 수술하면 약 2%, 터진 뒤에는 20~80%입니다. 이 차이가 증상이 없어도 대동맥을 확인해 보시라고 말씀드리는 이유입니다.'
  ),
  jsonb_build_array(
    'STS Adult Cardiac Surgery Database (elective proximal aortic mortality ~2%).',
    'Hagan PG, et al. JAMA. 2000;283:897-903.',
    'Reimerink JJ, et al. Br J Surg. 2013;100:1405-13.'
  )
),
(
  'thoracic-vs-abdominal',
  '흉부대동맥과 복부대동맥은 다른 병입니다',
  '한쪽에 병이 있다고 다른 쪽 검진이 자동으로 필요한 것은 아닙니다. 원인도 검진 방식도 다릅니다.',
  '검진',
  '2026-06-10',
  jsonb_build_array(
    '같은 대동맥이지만 흉부(TAA)와 복부(AAA)는 성격이 다른 병으로 봅니다.',
    '흉부대동맥류는 중막 변성과 유전적 요인의 비중이 큽니다. 가족성 비율이 20~21.5%에 이르고, 단일유전자 질환이 여럿 알려져 있습니다. 반면 복부대동맥류는 죽상경화·염증·흡연의 비중이 크고, 다인자 질환에 가깝습니다.',
    '검진 정책도 갈립니다. 복부대동맥류는 65~75세 흡연력이 있는 남성에게 초음파 1회 선별검사가 권고됩니다(USPSTF). 흉부대동맥류는 인구 단위 검진 권고가 없고, 가족력·이첨판막·유전질환 같은 고위험군을 겨냥한 표적 검진을 합니다.',
    '따라서 흉부대동맥류가 있다고 복부 검진을 자동으로 하지 않고, 그 반대도 마찬가지입니다. 다만 어느 쪽이든 직계가족에 대동맥질환이 있다면 본인의 위험은 올라가므로 확인해 보시는 편이 좋습니다.'
  ),
  jsonb_build_array(
    'US Preventive Services Task Force. AAA screening. JAMA. 2019;322:2211.',
    'Wanhainen A, et al. ESVS 2024 AAA Guidelines.',
    'Familial occurrence of AAA. Ann Intern Med. 1999;130:637.'
  )
),
(
  'how-often-followup',
  '대동맥류를 발견했습니다. 얼마나 자주 봐야 하나요?',
  '처음에는 자주, 안정되면 1년 전후. 부위와 크기에 따라 간격이 정해져 있습니다.',
  '추적관찰',
  '2026-06-10',
  jsonb_build_array(
    '흉부대동맥류는 진단 후 6~12개월에 다시 영상을 찍어 크기 변화를 확인하고, 안정적이면 6~24개월 간격으로 추적합니다(2022 ACC/AHA, Class 2a). 흉부대동맥류의 통상 성장 속도는 연 0.1~0.42cm입니다.',
    '복부대동맥류는 크기별로 간격이 더 명확합니다. 3.0~3.9cm는 3년, 4.0~4.9cm(남성)는 매년, 5.0cm 이상(남성)은 6개월 간격입니다.',
    '빠른 성장은 산발성에서 연 0.5cm 이상, 유전질환이나 이첨판막이 있으면 연 0.3cm 이상을 기준으로 봅니다. 이 속도가 확인되면 크기가 기준에 미치지 않아도 수술을 논의합니다.',
    '수술을 권하는 크기 기준은 일반적으로 5.5cm 이상(경험 많은 센터에서는 5.0cm), 유전질환이 있으면 5.0cm(고위험군 4.5cm), 이첨판막은 5.5cm(판막 수술을 함께 할 경우 4.5cm)입니다.'
  ),
  jsonb_build_array(
    'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.',
    'Czerny M, et al. EACTS/STS 2024 Guidelines.'
  )
),
(
  'ct-radiation-contrast',
  'CT 한 번, 방사선 괜찮을까요?',
  '진단 목적의 CT 1회는 이득이 위험보다 훨씬 큽니다. 문제가 되는 것은 반복 추적입니다.',
  '검진',
  '2026-06-10',
  jsonb_build_array(
    'CT는 가슴에서 배까지 대동맥 전체를 한 번에 정확히 보여주기 때문에 개인 확진의 표준 검사입니다.',
    '방사선을 걱정하시는 분이 많은데, 진단 목적의 CT 1회는 얻는 이득이 위험보다 훨씬 큽니다. 실질적으로 문제가 되는 것은 오랜 기간의 반복 추적으로 누적되는 경우이고, 이때는 초음파·심초음파·MRI로 대체합니다.',
    '조영제는 콩팥기능을 확인하고 씁니다. 크기 변화만 확인하는 목적이라면 조영제 없이(non-contrast) 찍는 CT도 가능합니다.',
    '다만 인구 전체에 대동맥 CT 검진을 하라는 권고는 없습니다. 가족력이나 고령 등 걱정되는 이유가 있으시면 외래에서 상의한 뒤 필요한 검사를 정하는 것이 맞습니다.'
  ),
  jsonb_build_array(
    'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline.',
    'US Preventive Services Task Force. JAMA. 2019;322:2211.'
  )
),
(
  'no-symptoms',
  '증상이 없어서 안심했다는 말이 가장 위험합니다',
  '흉부대동맥류는 대부분 무증상입니다. 증상을 기다리면 이미 늦습니다.',
  '증상',
  '2026-06-10',
  jsonb_build_array(
    '흉부대동맥류는 대부분 증상이 없습니다. 다른 이유로 찍은 검사에서 우연히 발견되는 경우가 대다수입니다.',
    '이 말은 곧, 증상이 나타날 때까지 기다리면 늦다는 뜻이기도 합니다. 대동맥이 늘어나는 동안 몸은 대개 아무 신호도 주지 않다가, 박리나 파열이라는 형태로 한 번에 신호를 보냅니다.',
    '조절할 수 있는 위험인자는 분명합니다. 고혈압, 흡연, 이상지질혈증입니다. 혈압을 관리하고 금연하는 것만으로도 위험을 낮출 수 있다는 것이 현재 가이드라인의 권고입니다.',
    '가족 중 대동맥질환이나 원인 불명의 급사가 있었다면, 증상이 없더라도 한 번은 확인해 보시기를 권합니다.'
  ),
  jsonb_build_array(
    'Merck Manual Professional — Thoracic Aortic Aneurysm.',
    'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.'
  )
)
on conflict (slug) do nothing;
