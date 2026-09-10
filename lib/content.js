/**
 * 사이트 정본 콘텐츠.
 *
 * 출처: RenaAI/ProfHong_md 아카이브
 *  - 이대서울 2026/Ewha_Research/Hong Seok Beom-CV-2026(English).docx.md  (가장 최신 CV)
 *  - Downloads/EUMC_의사프로필_작성양식.xlsx.md                            (병원 제출 프로필 양식)
 *  - 이대서울 2026/이대대동맥혈관병원 건강강좌/2026_강좌_팩트시트_검증완료.md.md (근거 검증 완료 팩트시트)
 *
 * 원칙: 공개 자료·본인 작성 CV에 실제로 있는 내용만 싣는다.
 * 환자 데이터(PHI)와 미공개 IRB 연구 상세는 이 파일에 넣지 않는다.
 */

export const profile = {
  nameKo: '홍석범',
  nameEn: 'Seokbeom Hong, M.D.',
  titleKo: '심장혈관흉부외과 진료조교수',
  titleEn: 'Assistant Professor of Clinical Practice',
  affiliationKo: '이화여자대학교 의과대학 부속 서울병원 · 이대대동맥혈관병원',
  affiliationEn:
    'Department of Thoracic and Cardiovascular Surgery, Ewha Womans University Seoul Hospital',
  headline: '대동맥을 평생 관리하는 심장혈관흉부외과 의사',
  subheadline:
    '급성 대동맥박리부터 대동맥류·판막질환, 유전성 대동맥질환 가족 관리까지 — 응급 수술과 장기 추적을 한 팀에서 잇습니다.',
  photo: '/profile.jpg',
  email: 'seokbeom2014@gmail.com',
  officePhone: '02-6986-2110',
  hospitalPhone: '1666-5000',
  address: '07804 서울특별시 강서구 공항대로 260, 이대서울병원 심장혈관흉부외과',
  addressEn:
    '260, Gonghang-daero, Gangseo-gu, Seoul 07804, Republic of Korea',
};

export const intro = [
  '대동맥질환은 한 번의 수술로 끝나지 않습니다. 급성 대동맥박리처럼 시간을 다투는 응급이 있는가 하면, 대동맥류처럼 수십 년에 걸쳐 크기를 지켜봐야 하는 병도 있습니다. 게다가 상당수는 가족에게 이어집니다.',
  '저는 가톨릭대학교 서울성모병원에서 전공의와 전임의 과정을 거쳐 성인심장·대동맥 수술을 배웠고, 강남세브란스병원 심장혈관외과 전임의를 지냈습니다. 2026년 3월부터 이대서울병원 심장혈관흉부외과에서 국내 최초의 대동맥 전담 병원인 이대대동맥혈관병원 대동맥팀의 일원으로 진료하고 있습니다.',
  '개흉 대동맥궁 전치환술(Frozen Elephant Trunk)과 스텐트 그라프트(TEVAR·EVAR)를 모두 다루기 때문에, 환자의 해부학과 위험도에 맞춰 개흉과 혈관 내 치료 중 어느 쪽이 유리한지 한 자리에서 판단할 수 있습니다. 수술이 필요 없는 환자에게는 무엇을, 얼마 간격으로 지켜봐야 하는지 근거를 들어 설명하는 것을 진료의 절반이라고 생각합니다.',
];

export const specialties = [
  {
    no: '01',
    title: '대동맥박리',
    en: 'Aortic Dissection',
    desc: '급성 A형·B형 대동맥박리의 응급 수술과 스텐트 치료. 발병 시각부터 치료 결정까지의 시간이 예후를 가르는 질환으로, 24시간 대응 체계 안에서 진료합니다.',
  },
  {
    no: '02',
    title: '대동맥류',
    en: 'Aortic Aneurysm',
    desc: '흉부·흉복부·복부 대동맥류. 수술 시점을 정하는 크기 기준과 성장 속도를 근거로 설명드리고, 아직 수술 대상이 아닌 분은 추적 영상 간격을 정해 함께 관리합니다.',
  },
  {
    no: '03',
    title: '대동맥궁 전치환술 · FET',
    en: 'Total Arch Replacement with Frozen Elephant Trunk',
    desc: '상행대동맥·대동맥궁·하행대동맥을 한 번의 수술로 처리하는 FET 기법. E-vita OPEN NEO 하이브리드 스텐트 그라프트를 이용한 수술 경험을 학회에서 발표해 왔습니다.',
  },
  {
    no: '04',
    title: '대동맥판막질환',
    en: 'Aortic Valve Disease',
    desc: '대동맥판막협착·역류, 이첨판막(BAV) 동반 대동맥병증. 빠른 거치형(rapid deployment) 판막 치환술의 초기 성적을 논문으로 보고했습니다.',
  },
  {
    no: '05',
    title: '스텐트 그라프트 · 하이브리드 수술',
    en: 'TEVAR / EVAR / Hybrid',
    desc: '흉부·복부 대동맥 스텐트 삽입술과 개흉·혈관내 치료를 조합한 하이브리드 수술. 스텐트 후 발생한 endoleak·kinking 등 합병증의 재수술도 담당합니다.',
  },
  {
    no: '06',
    title: '유전성 대동맥질환 클리닉',
    en: 'Marfan & Hereditary Aortic Disease',
    desc: '말판증후군·로이스디츠증후군 등 유전성 대동맥질환과 가족성 대동맥류. 환자 본인뿐 아니라 직계가족 선별검사까지 함께 계획합니다.',
  },
  {
    no: '07',
    title: '말초혈관 · 투석혈관',
    en: 'Peripheral Vascular & Vascular Access',
    desc: '말초동맥폐색질환, 심부정맥혈전증·폐색전증, 하지정맥류, 그리고 혈액투석을 위한 동정맥루 조성·관리.',
  },
  {
    no: '08',
    title: '체외순환보조 · ECMO',
    en: 'Extracorporeal Membrane Oxygenation',
    desc: '중증 심부전·호흡부전 환자의 체외막산소공급. 우심부전에서의 경피적 OxyRVAD 적용 사례를 보고했습니다.',
  },
];

export const timeline = [
  { period: '2026 – 현재', text: '이대서울병원 심장혈관흉부외과 진료조교수', place: '이화여자대학교 의과대학' },
  { period: '2023 – 2026', text: '가톨릭대학교 서울성모병원 심장혈관흉부외과 임상진료조교수' },
  { period: '2022 – 2023', text: '가톨릭대학교 서울성모병원 심장혈관흉부외과 임상강사' },
  { period: '2021 – 2022', text: '연세대학교 강남세브란스병원 심장혈관외과 임상강사' },
  { period: '2019 – 2021', text: '국군양주병원 흉부외과 과장' },
  { period: '2014 – 2018', text: '가톨릭대학교 서울성모병원 흉부외과 전공의' },
  { period: '2013 – 2014', text: '가톨릭대학교 가톨릭중앙의료원 인턴' },
];

export const education = [
  { period: '2016 – 2023', text: '가톨릭대학교 대학원 흉부외과학 박사 과정 수료' },
  { period: '2009 – 2013', text: '가톨릭대학교 의학전문대학원 의학과 (의무석사)' },
  { period: '2005 – 2009', text: '가천대학교 생명과학부 이학사' },
];

export const licenses = [
  { year: '2018', text: '흉부외과 전문의 (제1320호)' },
  { year: '2013', text: '의사 면허 (제112260호)' },
];

export const awards = [
  { year: '2025', text: '제18차 대한중재혈관외과학회 학술대회 Best Case Award' },
  { year: '2024', text: '제17차 대한중재혈관외과학회 학술대회 Best Case Award' },
  { year: '2023', text: '제55차 대한심장혈관흉부외과학회 학술대회 우수비디오상' },
  { year: '2019', text: '제51차 대한심장혈관흉부외과학회 학술대회 우수논문상' },
  { year: '2017', text: '가톨릭대학교 서울성모병원 모범전공의상' },
  { year: '2014', text: '가톨릭대학교 성빈센트병원 의무기록 우수전공의상' },
];

export const memberships = [
  '대한심장혈관흉부외과학회 정회원',
  '대한중재혈관외과학회 부총무이사',
  '대한대동맥연구회 정회원',
];

export const presentations = [
  { year: '2025', text: '제26차 아시아혈관외과학회(ASVS) 포스터 발표' },
  { year: '2023', text: '제31차 아시아심장혈관흉부외과학회(ATCSA) 포스터 발표' },
];

/** 진행 중 연구 — 본인 CV에 기재된 항목만. */
export const research = [
  {
    period: '2026.04 – 현재',
    title: '흉부대동맥질환 환자의 유전체 분석',
    titleEn: 'Genomic analysis in patients with thoracic aortic disease',
    desc: '유전성 대동맥질환의 원인 변이를 찾아 가족 선별검사와 수술 시점 결정에 활용하기 위한 연구.',
  },
  {
    period: '2026.04 – 현재',
    title: '대동맥 수술 환자의 음악 기반 재활이 정서·운동 회복에 미치는 영향',
    titleEn:
      'Effects of Music-Based Rehabilitation on Emotional and Motor Recovery in Aortic Surgery Patients',
    desc: '전향적 무작위 대조 연구. 대수술 이후의 회복을 신체 기능뿐 아니라 정서 측면에서 함께 본다.',
  },
  {
    period: '2026.04 – 현재',
    title: '개흉 대동맥 수술 후 연하장애의 유병률과 위험인자',
    titleEn:
      'Prevalence and Risk Factors of Dysphagia After Open Aortic Surgery',
    desc: '전향적 관찰 연구. 수술 후 흔하지만 과소평가되는 합병증을 체계적으로 측정한다.',
  },
];

/** 논문 — 본인 CV의 역순 목록 (2026-09 기준). */
export const publications = [
  {
    year: 2025,
    title:
      'Stent graft kinking after total arch replacement using frozen elephant trunk with E-Vita open Neo',
    journal: 'J Cardiothorac Surg',
    detail: '2025 Dec 8;20(1):453',
    doi: '10.1186/s13019-025-03709-y',
    topic: '대동맥',
  },
  {
    year: 2025,
    title:
      'Thoracoscopy-Guided vs. Ultrasound-Guided Paravertebral Block in Thoracoscopic Surgery: A Non-Inferiority Randomized Trial',
    journal: 'J Clin Med',
    detail: '2025 Nov 30;14(23):8493',
    doi: '10.3390/jcm14238493',
    topic: '흉부',
  },
  {
    year: 2025,
    title:
      'Hydrogels in Cardiac Surgery: Versatile Platforms for Tissue Repair, Adhesion Prevention, and Localized Therapeutics',
    journal: 'Gels',
    detail: '2025 Jul 21;11(7):564',
    doi: '10.3390/gels11070564',
    topic: '융합연구',
  },
  {
    year: 2024,
    title:
      'Early surgical outcomes of rapid deployment aortic valve replacement in bicuspid aortic valves',
    journal: 'J Thorac Dis',
    detail: '2024 Sep 30;16(9):6171-6181',
    doi: '10.21037/jtd-23-1942',
    topic: '판막',
  },
  {
    year: 2024,
    title:
      'Successful open surgical treatment for persistent type II endoleak following thoracic endovascular aortic repair: a case report',
    journal: 'J Cardiothorac Surg',
    detail: '2024 Jul 3;19(1):416',
    doi: '10.1186/s13019-024-02843-3',
    topic: '대동맥',
  },
  {
    year: 2024,
    title:
      'Percutaneous OxyRVAD in a Patient with Severe Respiratory Failure and Right Heart Failure: A Case Report',
    journal: 'J Chest Surg',
    detail: '2024 May 5;57(3):319-322',
    doi: '10.5090/jcs.23.132',
    topic: '순환보조',
  },
  {
    year: 2024,
    title:
      'Versatile human cardiac tissues engineered with perfusable heart extracellular microenvironment for biomedical applications',
    journal: 'Nat Commun',
    detail: '2024 Mar 22;15(1):2564',
    doi: '10.1038/s41467-024-46928-y',
    topic: '융합연구',
  },
  {
    year: 2023,
    title:
      'One-step thoracotomy approach for atrial-esophageal fistula repair without cardiopulmonary bypass',
    journal: 'Gen Thorac Cardiovasc Surg',
    detail: '2023 Nov;71(11):681-684',
    doi: '10.1007/s11748-023-01952-5',
    topic: '흉부',
  },
  {
    year: 2023,
    title:
      'Core-Shell Droplet-Based Angiogenic Patches for the Treatment of Ischemic Diseases',
    journal: 'ACS Appl Mater Interfaces',
    detail: '2023 Nov 8;15(44):50693-50707',
    doi: '10.1021/acsami.3c09062',
    topic: '융합연구',
  },
  {
    year: 2023,
    title:
      'Is preoperative intracranial hemorrhage a surgical contraindication in infective endocarditis with stroke?',
    journal: 'J Thorac Dis',
    detail: '2023 Sep 28;15(9):4765-4774',
    doi: '10.21037/jtd-23-695',
    topic: '판막',
  },
  {
    year: 2023,
    title:
      'Patient-specific stent for hemolytic anemia due to a kinked ascending aortic graft',
    journal: 'J Thorac Dis',
    detail: '2023 Aug 31;15(8):4497-4502',
    doi: '10.21037/jtd-23-688',
    topic: '대동맥',
  },
  {
    year: 2023,
    title:
      'The Gut-Heart Axis: Updated Review for The Roles of Microbiome in Cardiovascular Health',
    journal: 'Korean Circ J',
    detail: '2023 Aug;53(8):499-518',
    doi: '10.4070/kcj.2023.0048',
    topic: '융합연구',
  },
  {
    year: 2023,
    title:
      'Left ventricular assist device implantation combined with hemiarch replacement for severe aortic atherosclerosis',
    journal: 'J Thorac Dis',
    detail: '2023 Jul 31;15(7):3979-3983',
    doi: '10.21037/jtd-23-255',
    topic: '순환보조',
  },
  {
    year: 2023,
    title:
      'An unusual case of huge fibrotic sac of hematoma at saphenous vein harvest site for coronary artery bypass grafting: a case report',
    journal: 'J Cardiothorac Surg',
    detail: '2023 Jul 4;18(1):208',
    doi: '10.1186/s13019-023-02324-z',
    topic: '관상동맥',
  },
  {
    year: 2023,
    title:
      'Granulomatous inflammation mimicking a hematoma around the replaced ascending aorta in magnetic resonance imaging: a case report',
    journal: 'J Cardiothorac Surg',
    detail: '2023 Jun 13;18(1):191',
    doi: '10.1186/s13019-023-02298-y',
    topic: '대동맥',
  },
  {
    year: 2018,
    title: 'Right Main Bronchus Rupture Presenting with Pneumoperitoneum',
    journal: 'Korean J Thorac Cardiovasc Surg',
    detail: '2018 Jun;51(3):216-219',
    doi: '10.5090/kjtcs.2018.51.3.216',
    topic: '흉부',
  },
  {
    year: 2016,
    title:
      'Extracorporeal Life Support in Patients with Hematologic Malignancies: A Single Center Experience',
    journal: 'Korean J Thorac Cardiovasc Surg',
    detail: '2016 Aug;49(4):280-286',
    doi: '10.5090/kjtcs.2016.49.4.280',
    topic: '순환보조',
  },
];

/**
 * 건강정보 노트 — Supabase `posts` 테이블이 비어 있을 때 쓰이는 기본 글.
 * 내용은 2026 건강강좌 팩트시트(근거 검증 완료)에서 가져왔고, 각 글에 출처를 명시한다.
 */
export const seedPosts = [
  {
    slug: 'family-history-two-kinds',
    title: '가족력에는 두 종류가 있습니다',
    summary:
      '유전자 하나로 설명되는 증후군성 대동맥질환과, "집안 내력" 수준의 비증후군성 가족력은 대응이 다릅니다.',
    category: '가족력',
    published_at: '2026-06-10',
    body: [
      '대동맥질환의 가족력은 크게 두 갈래입니다.',
      '첫째, 강한 유전성(증후군성)입니다. 말판증후군(FBN1), 로이스-디츠증후군(TGFBR1/2 등), 혈관형 엘러스-단로스증후군(COL3A1), 가족성 비증후군성 TAAD(ACTA2 등)가 여기에 속합니다. 대부분 상염색체 우성이라 자녀에게 약 50% 전달되고, 젊은 나이에 발병하며 수술을 권하는 대동맥 크기 기준도 4.5~5.0cm로 더 낮습니다. 유전상담과 유전자검사, 그리고 가족 단위의 연쇄 선별검사(cascade screening)가 필요합니다.',
      '둘째, 훨씬 흔한 비증후군성 가족력입니다. 말판증후군이 아닌 흉부대동맥류·박리 환자의 21.5%가 가족성이었다는 보고가 있습니다(Albornoz G, Coady MA, et al. Ann Thorac Surg 2006;82:1400-5). 다섯 명 중 한 명꼴입니다. 이 경우 위험이 올라가는 것이지 50%처럼 확정적인 숫자는 아니며, 직계가족에게 권하는 것은 유전자검사보다 영상검진입니다.',
      '이첨대동맥판막(BAV)은 따로 언급할 만합니다. 유전율이 89%에 이르고 직계가족의 약 9%에서 발견됩니다(Cripe L, et al. J Am Coll Cardiol 2004;44:138-43). 인구의 1~2%가 가지고 있고 대동맥이 함께 늘어날 수 있어, 진단되면 직계가족의 심초음파 선별이 권고됩니다.',
    ],
    refs: [
      'Albornoz G, Coady MA, et al. Ann Thorac Surg. 2006;82:1400-5.',
      'Cripe L, et al. J Am Coll Cardiol. 2004;44:138-43.',
      'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.',
    ],
  },
  {
    slug: 'why-earlier-is-better',
    title: '미리 하면 2%, 터진 뒤에는 20~80%',
    summary:
      '예약 수술과 응급 상황의 사망률 차이는 10배가 넘습니다. 대동맥질환에서 "미리"가 중요한 이유입니다.',
    category: '치료',
    published_at: '2026-06-10',
    body: [
      '대동맥질환에서 시점의 차이는 곧 생존의 차이입니다.',
      '계획된(elective) 상행대동맥 수술의 사망률은 약 2%입니다(STS Adult Cardiac Surgery Database, 2011–2016, n=53,559). 복부대동맥류의 예약 수술도 스텐트(EVAR) 약 1.6%, 개복 약 4.8% 수준입니다.',
      '반면 급성 A형 대동맥박리는 수술을 해도 사망률이 26%, 수술하지 않으면 58%로 보고되었습니다(Hagan PG, et al. IRAD. JAMA 2000;283:897). 최근 IRAD 자료에서는 수술 사망률이 약 18%까지 낮아졌지만, 여전히 예약 수술의 10배 수준입니다.',
      '파열된 복부대동맥류는 더 냉정합니다. 전체 사망률 81%, 그중 32%는 병원에 도착하기 전에 사망합니다(Reimerink JJ, et al. Br J Surg 2013;100:1405).',
      '요약하면 미리 계획해 수술하면 약 2%, 터진 뒤에는 20~80%입니다. 이 차이가 증상이 없어도 대동맥을 확인해 보시라고 말씀드리는 이유입니다.',
    ],
    refs: [
      'STS Adult Cardiac Surgery Database (elective proximal aortic mortality ~2%).',
      'Hagan PG, et al. JAMA. 2000;283:897-903.',
      'Reimerink JJ, et al. Br J Surg. 2013;100:1405-13.',
    ],
  },
  {
    slug: 'thoracic-vs-abdominal',
    title: '흉부대동맥과 복부대동맥은 다른 병입니다',
    summary:
      '한쪽에 병이 있다고 다른 쪽 검진이 자동으로 필요한 것은 아닙니다. 원인도 검진 방식도 다릅니다.',
    category: '검진',
    published_at: '2026-06-10',
    body: [
      '같은 대동맥이지만 흉부(TAA)와 복부(AAA)는 성격이 다른 병으로 봅니다.',
      '흉부대동맥류는 중막 변성과 유전적 요인의 비중이 큽니다. 가족성 비율이 20~21.5%에 이르고, 단일유전자 질환이 여럿 알려져 있습니다. 반면 복부대동맥류는 죽상경화·염증·흡연의 비중이 크고, 다인자 질환에 가깝습니다.',
      '검진 정책도 갈립니다. 복부대동맥류는 65~75세 흡연력이 있는 남성에게 초음파 1회 선별검사가 권고됩니다(USPSTF). 흉부대동맥류는 인구 단위 검진 권고가 없고, 가족력·이첨판막·유전질환 같은 고위험군을 겨냥한 표적 검진을 합니다.',
      '따라서 흉부대동맥류가 있다고 복부 검진을 자동으로 하지 않고, 그 반대도 마찬가지입니다. 다만 어느 쪽이든 직계가족에 대동맥질환이 있다면 본인의 위험은 올라가므로 확인해 보시는 편이 좋습니다.',
    ],
    refs: [
      'US Preventive Services Task Force. AAA screening. JAMA. 2019;322:2211.',
      'Wanhainen A, et al. ESVS 2024 AAA Guidelines.',
      'Familial occurrence of AAA. Ann Intern Med. 1999;130:637.',
    ],
  },
  {
    slug: 'how-often-followup',
    title: '대동맥류를 발견했습니다. 얼마나 자주 봐야 하나요?',
    summary:
      '처음에는 자주, 안정되면 1년 전후. 부위와 크기에 따라 간격이 정해져 있습니다.',
    category: '추적관찰',
    published_at: '2026-06-10',
    body: [
      '흉부대동맥류는 진단 후 6~12개월에 다시 영상을 찍어 크기 변화를 확인하고, 안정적이면 6~24개월 간격으로 추적합니다(2022 ACC/AHA, Class 2a). 흉부대동맥류의 통상 성장 속도는 연 0.1~0.42cm입니다.',
      '복부대동맥류는 크기별로 간격이 더 명확합니다. 3.0~3.9cm는 3년, 4.0~4.9cm(남성)는 매년, 5.0cm 이상(남성)은 6개월 간격입니다.',
      '빠른 성장은 산발성에서 연 0.5cm 이상, 유전질환이나 이첨판막이 있으면 연 0.3cm 이상을 기준으로 봅니다. 이 속도가 확인되면 크기가 기준에 미치지 않아도 수술을 논의합니다.',
      '수술을 권하는 크기 기준은 일반적으로 5.5cm 이상(경험 많은 센터에서는 5.0cm), 유전질환이 있으면 5.0cm(고위험군 4.5cm), 이첨판막은 5.5cm(판막 수술을 함께 할 경우 4.5cm)입니다.',
    ],
    refs: [
      'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.',
      'Czerny M, et al. EACTS/STS 2024 Guidelines.',
    ],
  },
  {
    slug: 'ct-radiation-contrast',
    title: 'CT 한 번, 방사선 괜찮을까요?',
    summary:
      '진단 목적의 CT 1회는 이득이 위험보다 훨씬 큽니다. 문제가 되는 것은 반복 추적입니다.',
    category: '검진',
    published_at: '2026-06-10',
    body: [
      'CT는 가슴에서 배까지 대동맥 전체를 한 번에 정확히 보여주기 때문에 개인 확진의 표준 검사입니다.',
      '방사선을 걱정하시는 분이 많은데, 진단 목적의 CT 1회는 얻는 이득이 위험보다 훨씬 큽니다. 실질적으로 문제가 되는 것은 오랜 기간의 반복 추적으로 누적되는 경우이고, 이때는 초음파·심초음파·MRI로 대체합니다.',
      '조영제는 콩팥기능을 확인하고 씁니다. 크기 변화만 확인하는 목적이라면 조영제 없이(non-contrast) 찍는 CT도 가능합니다.',
      '다만 인구 전체에 대동맥 CT 검진을 하라는 권고는 없습니다. 가족력이나 고령 등 걱정되는 이유가 있으시면 외래에서 상의한 뒤 필요한 검사를 정하는 것이 맞습니다.',
    ],
    refs: [
      'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline.',
      'US Preventive Services Task Force. JAMA. 2019;322:2211.',
    ],
  },
  {
    slug: 'no-symptoms',
    title: '증상이 없어서 안심했다는 말이 가장 위험합니다',
    summary:
      '흉부대동맥류는 대부분 무증상입니다. 증상을 기다리면 이미 늦습니다.',
    category: '증상',
    published_at: '2026-06-10',
    body: [
      '흉부대동맥류는 대부분 증상이 없습니다. 다른 이유로 찍은 검사에서 우연히 발견되는 경우가 대다수입니다.',
      '이 말은 곧, 증상이 나타날 때까지 기다리면 늦다는 뜻이기도 합니다. 대동맥이 늘어나는 동안 몸은 대개 아무 신호도 주지 않다가, 박리나 파열이라는 형태로 한 번에 신호를 보냅니다.',
      '조절할 수 있는 위험인자는 분명합니다. 고혈압, 흡연, 이상지질혈증입니다. 혈압을 관리하고 금연하는 것만으로도 위험을 낮출 수 있다는 것이 현재 가이드라인의 권고입니다.',
      '가족 중 대동맥질환이나 원인 불명의 급사가 있었다면, 증상이 없더라도 한 번은 확인해 보시기를 권합니다.',
    ],
    refs: [
      'Merck Manual Professional — Thoracic Aortic Aneurysm.',
      'Isselbacher EM, et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation. 2022;146:e334-e482.',
    ],
  },
];

export const navItems = [
  { href: '#about', label: '소개' },
  { href: '#specialty', label: '진료분야' },
  { href: '#career', label: '경력' },
  { href: '#research', label: '연구·논문' },
  { href: '#notes', label: '건강정보' },
  { href: '#contact', label: '문의' },
];
