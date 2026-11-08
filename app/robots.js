import { abs } from '../lib/site';

/**
 * 생성형·답변형 엔진의 크롤러를 이름으로 명시한다.
 *
 * ※ 효과를 과장하지 말 것: 아래 `*` 규칙이 이미 전체 허용이므로, 이름을 적는 것은
 *    "차단 의도가 없다" 는 의사 표시에 가깝다. 차단하고 싶은 봇이 생기면
 *    해당 항목의 allow 를 disallow 로 바꾸면 된다.
 *
 * ※ Google-Extended 와 Applebot-Extended 는 검색 수집용이 아니라 AI 학습 활용
 *    토큰이다. 허용하면 콘텐츠가 모델 학습에 쓰이는 것에 동의하는 셈이다.
 */
const ANSWER_ENGINE_BOTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini 학습·그라운딩 토큰)
  'Google-Extended',
  // Apple (학습 토큰)
  'Applebot-Extended',
  // 기타
  'Amazonbot',
  'CCBot',
  'meta-externalagent',
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // 네이버 검색 로봇. 서치어드바이저가 Yeti 로 수집한다.
      {
        userAgent: 'Yeti',
        allow: '/',
      },
      {
        userAgent: ANSWER_ENGINE_BOTS,
        allow: '/',
      },
    ],
    sitemap: abs('/sitemap.xml'),
  };
}
