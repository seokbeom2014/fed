/**
 * schema.org JSON-LD 빌더.
 *
 * 목적(AEO): 답변 엔진·AI 검색이 페이지에서 "누가 / 무엇을 / 어떤 근거로" 를
 * 구조적으로 꺼낼 수 있게 한다. 특히 FAQPage 와 note 의 citation 이 핵심이다.
 *
 * 원칙: 사이트에 실제로 있는 사실만 싣는다. 평점·후기·환자수 같은
 *       검증 불가 필드는 넣지 않는다(의료광고 규정과도 무관하지 않다).
 */
import {
  profile,
  specialties,
  education,
  awards,
  memberships,
  licenses,
  faqs,
  videos,
  channelUrl,
} from './content';
import { abs, siteUrl } from './site';

const ORG_ID = `${siteUrl}/#organization`;
const PERSON_ID = `${siteUrl}/#person`;
const SITE_ID = `${siteUrl}/#website`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '260 Gonghang-daero',
  addressLocality: 'Gangseo-gu',
  addressRegion: 'Seoul',
  postalCode: '07804',
  addressCountry: 'KR',
};

/** 소속 병원. 교수 개인이 아니라 기관이므로 분리해 둔다. */
export function organization() {
  return {
    '@type': 'MedicalOrganization',
    '@id': ORG_ID,
    name: '이화여자대학교 의과대학 부속 서울병원',
    alternateName: ['이대서울병원', profile.centerKo, 'Ewha Womans University Seoul Hospital'],
    department: {
      '@type': 'MedicalOrganization',
      name: '심장혈관흉부외과',
      alternateName: 'Department of Thoracic and Cardiovascular Surgery',
    },
    address: postalAddress,
  };
}

/** 의료진 본인. AEO 에서 "이 답변은 누가 말했나" 를 결정하는 노드. */
export function person() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.nameKo,
    alternateName: profile.nameEn,
    givenName: '석범',
    familyName: '홍',
    jobTitle: profile.titleKo,
    description: profile.subheadline,
    url: siteUrl,
    image: abs(profile.photo),
    email: `mailto:${profile.email}`,
    telephone: profile.expressPhone,
    worksFor: { '@id': ORG_ID },
    workLocation: { '@type': 'Place', address: postalAddress },
    sameAs: [channelUrl],
    knowsLanguage: ['ko', 'en'],
    hasOccupation: {
      '@type': 'Occupation',
      name: '심장혈관흉부외과 전문의',
      occupationalCategory: 'Thoracic and Cardiovascular Surgery',
    },
    // 진료분야 — 답변 엔진이 "무엇에 대해 권위가 있는가" 를 판단하는 신호.
    knowsAbout: specialties.flatMap((s) => [s.title, s.en]),
    alumniOf: education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e.text,
    })),
    award: awards.map((a) => `${a.year} ${a.text}`),
    memberOf: memberships.map((m) => ({ '@type': 'Organization', name: m })),
    hasCredential: licenses.map((l) => ({
      '@type': 'EducationalOccupationalCredential',
      name: l.text,
      dateCreated: l.year,
      credentialCategory: 'license',
    })),
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: siteUrl,
    name: `${profile.nameKo} · ${profile.titleKo}`,
    inLanguage: 'ko-KR',
    publisher: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
  };
}

/** FAQPage — AEO 에서 가장 직접적으로 인용되는 형식. */
export function faqPage() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    inLanguage: 'ko-KR',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      url: abs(`/notes/${f.slug}`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
        url: abs(`/notes/${f.slug}`),
      },
    })),
  };
}

/** 수술 영상. 학술 영상이므로 대상 독자를 명시한다. */
export function videoObjects() {
  return videos.map((v) => ({
    '@type': 'VideoObject',
    '@id': `${siteUrl}/#video-${v.id}`,
    name: v.titleEn,
    alternateName: v.titleKo,
    description: v.titleKo,
    uploadDate: v.date,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`],
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    inLanguage: 'en',
    creator: { '@id': PERSON_ID },
    isFamilyFriendly: false,
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Clinician',
      name: '의료인',
    },
  }));
}

/** 건강정보 노트 1편. refs 를 citation 으로 넘기는 것이 이 함수의 핵심. */
export function medicalWebPage(post) {
  const url = abs(`/notes/${post.slug}`);
  const refs = Array.isArray(post.refs) ? post.refs.filter(Boolean) : [];
  const body = Array.isArray(post.body) ? post.body : [String(post.body || '')];

  return {
    '@type': 'MedicalWebPage',
    '@id': url,
    url,
    name: post.title,
    headline: post.title,
    description: post.summary,
    inLanguage: 'ko-KR',
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: { '@id': PERSON_ID },
    reviewedBy: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': SITE_ID },
    about: { '@type': 'MedicalCondition', name: '대동맥질환' },
    audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    // 근거 문헌 — 생성형 검색이 출처를 따라갈 수 있게 한다.
    citation: refs.map((r) => ({ '@type': 'CreativeWork', name: r })),
    articleBody: body.join('\n\n'),
    wordCount: body.join(' ').replace(/\s+/g, ' ').trim().split(' ').length,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: '건강정보 노트',
          item: abs('/#notes'),
        },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  };
}

/** 홈에 넣는 그래프. @graph 로 묶어 노드 간 참조(@id)를 살린다. */
export function homeGraph(posts = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      person(),
      website(),
      faqPage(),
      ...videoObjects(),
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#notes-list`,
        name: '건강정보 노트',
        itemListElement: posts.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title,
          url: abs(`/notes/${p.slug}`),
        })),
      },
    ],
  };
}

export function notePageGraph(post) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), person(), website(), medicalWebPage(post)],
  };
}

/** `</script>` 로 빠져나가는 것만 막고 그대로 직렬화한다. */
export function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
