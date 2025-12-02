import React from 'react';

const sampleProducts = [
  { id: 1, name: 'Product A', price: '₹199' },
  { id: 2, name: 'Product B', price: '₹299' },
  { id: 3, name: 'Product C', price: '₹399' },
];

export default function Products() {
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <p>Browse our sample products:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sampleProducts.map((p) => (
          <li key={p.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <strong>{p.name}</strong> — <span style={{ color: 'rgba(0,0,0,0.6)' }}>{p.price}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
