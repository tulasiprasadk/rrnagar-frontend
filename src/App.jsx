import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home'; // keep your existing Home
import Products from './pages/Products'; // keep your existing Products

// Lightweight NotFound component (keeps app copy-paste ready)
function NotFound() {
  return (
    <main style={{ padding: 24 }}>
      <h2>Page not found</h2>
      <p>The page you requested does not exist.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Header shown on every page */}
      <Header />

      {/* Main content area; Routes determine the page content */}
      <main style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* add other routes here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer shown on every page */}
      <Footer />
    </BrowserRouter>
  );
}