'use client';

import { useMemo, useState } from 'react';

const ALL = '전체';

export default function Publications({ items }) {
  const [topic, setTopic] = useState(ALL);

  const topics = useMemo(() => {
    const set = new Set(items.map((p) => p.topic).filter(Boolean));
    return [ALL, ...Array.from(set)];
  }, [items]);

  const shown = topic === ALL ? items : items.filter((p) => p.topic === topic);

  return (
    <div>
      <div className="pub__filters" role="group" aria-label="논문 분야 필터">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            className="pub__filter"
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
          >
            {t} ({t === ALL ? items.length : items.filter((p) => p.topic === t).length})
          </button>
        ))}
      </div>

      <div className="pub__list">
        {shown.map((p) => (
          <article className="pub__item" key={p.doi}>
            <div className="pub__year">{p.year}</div>
            <div>
              <h3 className="pub__title">
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.title}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </h3>
              <p className="pub__meta">
                <span className="pub__journal">{p.journal}</span> · {p.detail}
                {p.topic ? <span className="pub__badge">{p.topic}</span> : null}
              </p>
            </div>
          </article>
        ))}
        {shown.length === 0 && (
          <p className="pub__empty">해당 분야의 논문이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
