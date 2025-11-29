import React, { useState } from 'react';
import '../styles/discover.css'; // ensure this file exists (content below)

/*
  Usage:
  - Place images into src/assets/categories/ named category1.jpg etc. OR update the URLs in the categories array below.
  - Import and use <DiscoverRRnagar /> in your page (Home/App).
*/

const categories = [
  {
    id: 1,
    title: 'Heritage Temples',
    image: '/src/assets/categories/temple.jpg', // replace with real paths
    brief: 'Ancient temples with rich history and intricate carvings that reflect the region\'s cultural heritage.',
    long: 'These temples date back centuries and showcase intricate stone work, annual festivals and local rituals. They are central to the community life and offer calm courtyards and detailed sculptures to explore.'
  },
  {
    id: 2,
    title: 'Local Markets',
    image: '/src/assets/categories/market.jpg',
    brief: 'Bustling local markets with fresh produce, handicrafts and regional spices.',
    long: 'The markets are vibrant in the mornings and evenings. Try local snacks, buy handmade crafts and interact with friendly vendors to learn about local traditions.'
  },
  {
    id: 3,
    title: 'Scenic Lakes',
    image: '/src/assets/categories/lake.jpg',
    brief: 'Serene lakes ideal for morning walks, birdwatching and photography.',
    long: 'The lakes are a haven for migratory birds in season, with walking paths and shaded benches. Boat rides may be available seasonally and sunsets are particularly beautiful.'
  }
];

export default function DiscoverRRnagar() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="discover" aria-labelledby="discover-title">
      <div className="header-content">
        <h2 id="discover-title" className="discover-title">Discover RRnagar</h2>
      </div>

      <div className="header-content">
        <div className="discover-grid" role="list">
          {categories.map(cat => (
            <article
              key={cat.id}
              role="listitem"
              className="discover-card"
              onClick={() => setSelected(cat)}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(cat); }}
              tabIndex={0}
              aria-label={`${cat.title} — ${cat.brief}`}
            >
              <img src={cat.image} alt={cat.title} />
              <div className="card-body">
                <h3 className="card-title">{cat.title}</h3>
                <p className="card-brief">{cat.brief}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="discover-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={() => setSelected(null)}>
          <div className="discover-modal" onClick={(e) => e.stopPropagation()}>
            <h3 id="modal-title">{selected.title}</h3>
            <img src={selected.image} alt={selected.title} style={{ width: '100%', height: 'auto', borderRadius: 6, marginBottom: 12 }} />
            <p style={{ color:'#333' }}>{selected.long}</p>
            <div style={{ textAlign: 'right', marginTop: 12 }}>
              <button onClick={() => setSelected(null)} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', background: '#fff' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}