import React, { useState } from "react";
import "./Home.css";
import heroImg from "../assets/rrnagar_hero.jpg";

export default function Home() {
  const ads = [
    { id: "vchase", src: "/src/assets/ads/vchase.png", href: "#", alt: "VChase" },
    { id: "rrnagar", src: "/src/assets/ads/rrnagar.png", href: "#", alt: "RR Nagar" },
    { id: "gephyr", src: "/src/assets/ads/gephyr.png", href: "#", alt: "Gephyr" },
    { id: "ichase", src: "/src/assets/ads/ichase.png", href: "#", alt: "iChase" },
    { id: "reneevet", src: "/src/assets/ads/reneevet.png", href: "#", alt: "Renee Vet" }
  ];

  return (
    <main className="home-container">

      
      <section className="hero">
        <div className="hero-image">
          <img src={heroImg} alt="RR Nagar" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">ನಮ್ಮಿಂದ ನಿಮಗೆ — ನಿಮ್ಮಷ್ಟೇ ಹತ್ತಿರ.</h1>
          <p className="hero-sub">From Us To You — As Close As You Need Us.</p>

          <div className="search-box">
            <input type="text" placeholder="Search RR Nagar shops, services…" />
            <button>Search</button>
          </div>
        </div>
      </section>

      
      <section className="popular-cat">
        <h2>Popular Categories</h2>
        <div className="cat-grid">
          <div className="cat-item"><span className="cat-icon">🛒</span>Groceries</div>
          <div className="cat-item"><span className="cat-icon">🌸</span>Flowers</div>
          <div className="cat-item"><span className="cat-icon">🐶</span>Pet Services</div>
          <div className="cat-item"><span className="cat-icon">🚕</span>Travels</div>
          <div className="cat-item"><span className="cat-icon">🏠</span>Home Services</div>
          <div className="cat-item"><span className="cat-icon">🍽️</span>Restaurants</div>
        </div>
      </section>

      
      <section className="ad-section" aria-label="Promotions">
        <div className="ad-track" role="list">
          {ads.map((ad) => (
            <a key={ad.id} href={ad.href} className="ad-card" target="_blank" rel="noopener noreferrer">
              <img src={ad.src} alt={ad.alt} className="ad-img" />
              <span className="ad-name">{ad.alt}</span>
            </a>
          ))}

          
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

      
      <section className="explore-section">
        <h2>Discover RR Nagar</h2>

        <div className="explore-grid">
          <ExploreItem
            icon="🛕"
            title="Temples"
            desc="Spiritual & heritage sites."
            longInfo="Famous temples: Rajarajeshwari Temple, Bhuvaneshwari Temple, Sri Muktheertheshwara."
          />

          <ExploreItem
            icon="🌳"
            title="Parks"
            desc="Green peaceful spaces."
            longInfo="Biodiversity Park, BDA parks, and community gardens to relax."
          />

          <ExploreItem
            icon="🖥️"
            title="IT Parks"
            desc="Major tech hubs nearby."
            longInfo="Very close to Global Village Tech Park with many IT companies."
          />

          <ExploreItem
            icon="🎓"
            title="Education"
            desc="Schools & colleges."
            longInfo="RR Nagar has top schools, PU colleges and coaching centers."
          />

          <ExploreItem
            icon="🎭"
            title="Entertainment"
            desc="Malls & fun places."
            longInfo="Malls, theatres, events and gaming zones for families."
          />
        </div>
      </section>

    </main>
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

      <div className={`explore-popup ${open ? "visible" : ""}`}>
        <div className="popup-title">{title}</div>
        <div className="popup-body">{longInfo}</div>
      </div>
    </div>
  );
}
