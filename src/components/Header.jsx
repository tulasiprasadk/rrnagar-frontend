import "./Header.css";
import logo from "../assets/rrlogo.png"; // Make sure name is correct

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="RR Nagar Logo" className="rr-logo" />
        <div className="rr-tagline">RR ನಗರದ ಹೊಸ ಡಿಜಿಟಲ್ ಅನುಭವ</div>
      </div>

      <nav className="header-nav">
        <a href="/account">Your Account</a>
        <a href="/contact">Contact</a>
        <a href="/help">Help</a>
        <a href="/faqs">FAQs</a>
      </nav>
    </header>
  );
}
