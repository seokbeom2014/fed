import { getPosts } from '../lib/posts';
import { abs } from '../lib/site';

export const revalidate = 3600;

export default async function sitemap() {
  const { posts } = await getPosts();

  const noteEntries = posts.map((post) => ({
    url: abs(`/notes/${post.slug}`),
    // published_at 이 없으면 빌드 시각으로 떨어진다.
    lastModified: post.published_at ? new Date(post.published_at) : new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  // 건강정보 노트 중 가장 최근 글 날짜를 홈의 lastModified 로 쓴다.
  const latest = noteEntries.reduce(
    (acc, e) => (e.lastModified > acc ? e.lastModified : acc),
    new Date(0)
  );

  return [
    {
      url: abs('/'),
      lastModified: latest.getTime() > 0 ? latest : new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...noteEntries,
  ];
}
