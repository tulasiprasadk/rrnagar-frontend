import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          {/* Keep the rest of your footer content here (links, contact, socials, etc.) */}
        </div>

        {/* Simple ASCII copyright line to avoid encoding issues */}
        <div className="footer-copyright" style={{ padding: "12px 0", textAlign: "center" }}>
          (C) 2025 RR Nagar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}