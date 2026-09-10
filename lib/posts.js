import { getPublicClient } from './supabase';
import { seedPosts } from './content';

/**
 * 건강정보 글 목록.
 * Supabase가 설정되어 있고 posts 테이블에 행이 있으면 그쪽을, 아니면 seedPosts를 쓴다.
 * 덕분에 Supabase 없이도 사이트가 그대로 뜬다.
 */
export async function getPosts() {
  const supabase = getPublicClient();
  if (!supabase) return { posts: seedPosts, source: 'local' };

  const { data, error } = await supabase
    .from('posts')
    .select('slug, title, summary, category, published_at, body, refs')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error || !data || data.length === 0) {
    return { posts: seedPosts, source: 'local' };
  }
  return { posts: data, source: 'supabase' };
}

export async function getPost(slug) {
  const { posts } = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}
