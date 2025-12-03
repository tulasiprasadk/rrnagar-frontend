import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f2f2f2", padding: "24px 16px" }}>
      <div style={footerContainer}>
        {/* Left: Contact Info */}
        <div style={leftColumn}>
          <strong>Contact Us:</strong><br />
          📞 <a href="https://wa.me/919844007900" style={contactLink}>98440 07900</a><br />
          ✉️ <a href="mailto:namaste@rrnagar.com" style={contactLink}>namaste@rrnagar.com</a>
        </div>

        {/* Right: Navigation Links */}
        <div style={rightColumn}>
          <nav aria-label="Footer links">
            <Link to="/partner" style={linkStyle}>Partner Us</Link>
            <span style={sep}>•</span>
            <Link to="/blog" style={linkStyle}>Blog</Link>
            <span style={sep}>•</span>
            <Link to="/privacy" style={linkStyle}>Privacy Notice</Link>
            <span style={sep}>•</span>
            <Link to="/terms" style={linkStyle}>Conditions of Use</Link>
            <span style={sep}>•</span>
            <Link to="/supplier-login" style={linkStyle}>Supplier</Link>
          </nav>
        </div>
      </div>

      <div style={{ marginTop: 16, fontSize: 13, color: "#666", textAlign: "center" }}>
        &copy; 2025 RR Nagar. All rights reserved.
      </div>
    </footer>
  );
}

const footerContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "24px",
};

const leftColumn = {
  flex: "1",
  minWidth: "220px",
  fontSize: 14,
  color: "#444",
};

const rightColumn = {
  flex: "1",
  minWidth: "220px",
  textAlign: "right",
  fontSize: 14,
};

const linkStyle = {
  margin: "0 6px",
  color: "inherit",
  textDecoration: "none",
  fontWeight: 500,
};

const sep = {
  margin: "0 4px",
  color: "#999",
};

const contactLink = {
  color: "#0077cc",
  textDecoration: "none",
  fontWeight: 500,
};
