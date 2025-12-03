import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://localhost:5002/admin/products')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setProducts)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <div style={{ padding: 20, color: 'red' }}>Failed to load products: {error}</div>;
  if (!products) return <div style={{ padding: 20 }}>Loading products…</div>;
  if (!products.length) return <div style={{ padding: 20 }}>No products available</div>;

  return (
    <div style={{ padding: 20 }}>
      {products.map((p) => (
        <article key={p.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
          <h3 style={{ margin: 0 }}>{p.title}</h3>
          <p style={{ margin: '6px 0' }}>{p.description}</p>
          <small>SKU: {p.sku} • Price: {p.price} • Stock: {p.stock}</small>
        </article>
      ))}
    </div>
  );
}
