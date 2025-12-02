import React from 'react';

export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid rgba(0,0,0,0.06)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.25rem" }}>rrnagar-frontend</h1>
    </header>
  );
}
