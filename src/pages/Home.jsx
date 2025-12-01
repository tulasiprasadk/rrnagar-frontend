import React, { useState } from "react";
import "./Home.css";
import heroImg from "../assets/rrnagar_hero.jpg";
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
  { id: 'reneevet', src: reneevet, href: '#', alt: 'Renee Vet' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-image">
            <img src={heroImg} alt="RR Nagar" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">a¦¿a¦«a¦ìa¦«a¦+a¦éa¦ª a¦¿a¦+a¦«a¦ùa¦å GÇö a¦¿a¦+a¦«a¦ìa¦«a¦+a¦ìa¦ƒa¦ç a¦¦a¦ña¦ìa¦ña¦+a¦¦.</h1>
            <p className="hero-sub">From Us To You GÇö As Close As You Need Us.</p>

            <div className="search-box">
              <input type="text" placeholder="Search RR Nagar shops, services…" />
              <button>Search</button>
            </div>
          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="popular-cat">
          <h2>Popular Categories</h2>
          <div className="cat-grid">
            <div className="cat-item"><span className="cat-icon">=ƒ¢Æ</span>Groceries</div>
            <div className="cat-item"><span className="cat-icon">=ƒî+</span>Flowers</div>
            <div className="cat-item"><span className="cat-icon">=ƒÉ¦</span>Pet Services</div>
            <div className="cat-item"><span className="cat-icon">=ƒÜò</span>Travels</div>
            <div className="cat-item"><span className="cat-icon">=ƒÅá</span>Home Services</div>
            <div className="cat-item"><span className="cat-icon">=ƒì+n+Å</span>Restaurants</div>
          </div>
        </section>

        {/* ADVERTISEMENT LOGO SLIDER */}
        <section className="ad-section" aria-label="Promotions">
          <div className="ad-track" role="list">
            {ads.map((ad) => (
              <a key={ad.id} href={ad.href} className="ad-card" target="_blank" rel="noopener noreferrer">
                <img src={ad.src} alt={ad.alt} className="ad-img" />
                <span className="ad-name">{ad.alt}</span>
              </a>
            ))}

            {/* Duplicate for infinite scroll */}
            {ads.map((ad) => (
              <a
                key={ad.id + "-dup"}
                href={ad.href}
                className="ad-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
              >
                <img src={ad.src} alt={ad.alt} className="ad-img" />
                <span className="ad-name">{ad.alt}</span>
              </a>
            ))}
          </div>
        </section>

        {/* DISCOVER RR NAGAR */}
        <section className="explore-section">
          <h2>Discover RR Nagar</h2>

          <div className="explore-grid">
            <ExploreItem
              icon="=ƒ¢ò"
              title="Temples"
              desc="Spiritual & heritage sites."
              longInfo="Famous temples: Rajarajeshwari Temple, Bhuvaneshwari Temple, Sri Muktheertheshwara."
            />

            <ExploreItem
              icon="=ƒî¦"
              title="Parks"
              desc="Green peaceful spaces."
              longInfo="Biodiversity Park, BDA parks, and community gardens to relax."
            />

            <ExploreItem
              icon="=ƒûÑn+Å"
              title="IT Parks"
              desc="Major tech hubs nearby."
              longInfo="Very close to Global Village Tech Park with many IT companies."
            />

            <ExploreItem
              icon="=ƒÄô"
              title="Education"
              desc="Schools & colleges."
              longInfo="RR Nagar has top schools, PU colleges and coaching centers."
            />

            <ExploreItem
              icon="=ƒÄ¡"
              title="Entertainment"
              desc="Malls & fun places."
              longInfo="Malls, theatres, events and gaming zones for families."
            />
          </div>
        </section>

        {/* Keep the ad-grid (if you want the small grid elsewhere too) */}
        <section className="ad-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
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

/* EXPLORE ITEM */
function ExploreItem({ icon, title, desc, longInfo }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="explore-card"
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="explore-icon-wrap">
        <span className="explore-icon">{icon}</span>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className={explore-popup }>
        <div className="popup-title">{title}</div>
        <div className="popup-body">{longInfo}</div>
      </div>
    </div>
  );
}
