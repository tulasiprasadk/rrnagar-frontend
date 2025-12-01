import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import vchase from '../assets/ads/vchase.png';
import rrnagar from '../assets/ads/rrnagar.png';
import gephyr from '../assets/ads/gephyr.png';
import ichase from '../assets/ads/ichase.png';
import reneevet from '../assets/ads/reneevet.png';

const ads = [
  { id: 'vchase', src: vchase, href: '#', alt: 'VChase' },
  { id: 'rrnagar', src: rrnagar, href: '#', alt: 'RR Nagar' },
  { id: 'gephyr', src: gephyr, href: '#', alt: 'Gephyr' },
  { id: 'ichase', src: ichase, href: '#', alt: 'iChase' },
  { id: 'reneevet', src: reneevet, href: '#', alt: 'Reneevet' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page" style={{ padding: '1rem' }}>
        <section className="ad-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
          {ads.map(a => (
            <a key={a.id} href={a.href} className="ad-item" style={{ display: 'block', overflow: 'hidden' }}>
              <img src={a.src} alt={a.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
