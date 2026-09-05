import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Screen resize par menu automatically close ho jaye agar screen 992px se bari ho
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="navbar-logo">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg"
            >
              <defs>
                <linearGradient
                  id="tealGradient"
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                >
                  <stop offset="0%" stopColor="#00C7B7" />
                  <stop offset="100%" stopColor="#087F73" />
                </linearGradient>
              </defs>

              <path
                d="M5.631 3.676 12.001 0l6.367 3.676-2.34 1.358L12 2.716 7.972 5.034 5.631 3.676Zm12.737 4.636-2.34-1.358L12 9.272 7.972 6.954l-2.34 1.358v2.716l4.026 2.318v4.636L12 19.341l2.341-1.359v-4.636l4.027-2.318V8.312Zm0 7.352v-2.716l-2.34 1.358v2.716l2.34-1.358Zm1.663.96-4.027 2.318v2.717l6.368-3.677V10.63l-2.34 1.358v4.636Zm-2.34-10.63 2.34 1.358v2.716l2.341-1.358V5.994l-2.34-1.358-2.342 1.358ZM9.657 19.926v2.716L12 24l2.341-1.358v-2.716l-2.34 1.358-2.343-1.358Zm-4.027-4.262 2.341 1.358v-2.716l-2.34-1.358v2.716Zm4.027-9.67L12 7.352l2.341-1.358-2.34-1.358-2.343 1.358Zm-5.69 1.358L6.31 5.994 3.968 4.636l-2.34 1.358V8.71l2.34 1.358V7.352Zm0 4.636-2.34-1.358v7.352l6.368 3.677v-2.717l-4.028-2.318v-4.636Z"
                fill="url(#tealGradient)"
              />
            </svg>
          </div>

          <span>Web Coding</span>
        </div>

        {/* =========================
            HAMBURGER / 3 LINES (MOBILE ONLY)
        ========================= */}
        <button
          className={`hamburger-btn ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>

        {/* =========================
            NAVIGATION & LOGIN WRAPPER
        ========================= */}
        <div className={`nav-links-wrapper ${isOpen ? "open" : ""}`}>
          <ul className="nav-menu">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/tech-stack" className="navbar-link-style" onClick={closeMenu}>Tech Stack</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <Link to="/login" className="nav-button" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </nav>

      {/* Dimmed backdrop when mobile menu is open */}
      {isOpen && (
        <div className="nav-backdrop" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default NavBar;