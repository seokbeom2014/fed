import { notFound } from 'next/navigation';
import { getPost, getPosts } from '../../../lib/posts';
import { notePageGraph, jsonLd } from '../../../lib/schema';

export const revalidate = 300;

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: '글을 찾을 수 없습니다' };
  return { title: `${post.title} | 홍석범 건강정보 노트`, description: post.summary };
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const body = Array.isArray(post.body) ? post.body : String(post.body || '').split('\n\n');
  const refs = Array.isArray(post.refs) ? post.refs : [];

  return (
    <article className="wrap post">
      {/* 구조화 데이터 — refs 를 citation 으로 넘겨 출처를 따라갈 수 있게 한다. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(notePageGraph(post)) }}
      />

      <a className="post__back" href="/#notes">
        ← 건강정보 노트 목록
      </a>

      <header className="post__head">
        <span className="post__cat">{post.category}</span>
        <h1 className="post__title">{post.title}</h1>
        <p className="post__date">{post.published_at}</p>
      </header>

      <div className="post__body">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {refs.length > 0 && (
        <section className="post__refs">
          <h3>REFERENCES</h3>
          <ol>
            {refs.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </section>
      )}

      <p className="post__disclaimer">
        이 글은 일반적인 의학 정보이며 개별 환자의 진단이나 치료를 대신하지 않습니다.
        본인의 상태에 대한 판단은 반드시 진료를 통해 상의해 주세요.
      </p>
    </article>
  );
}
