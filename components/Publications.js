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
      <div className="pub__filters">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            className="pub__filter"
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
          >
            {t}
            <span style={{ opacity: 0.8, marginLeft: '6px', fontSize: '13px' }}>
              ({t === ALL ? items.length : items.filter((p) => p.topic === t).length})
            </span>
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
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>{p.title}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ shrink: 0, opacity: 0.7 }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </h3>
              <p className="pub__meta">
                <span className="pub__journal">{p.journal}</span> · {p.detail}
                {p.topic ? <span className="pub__badge">{p.topic}</span> : null}
              </p>
            </div>
          </article>
        ))}
        {shown.length === 0 && <p className="pub__empty">해당 분야의 논문이 없습니다.</p>}
      </div>
    </div>
  );
}
