import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll up → show sticky smoothly
      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10); // delay for smooth entrance
      }
      // Scroll down → hide sticky instantly
      else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100); // small delay for hide
      }

      // Reset if near top
      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileActive(false);
  };

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      <div
        className={`xb-header xb-sticky-stt ${isSticky ? "xb-header-area-sticky" : ""
          } ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
        style={{
          background: "linear-gradient(180deg, rgba(8, 8, 11, 0.95) 0%, rgba(8, 8, 11, 0.7) 50%, rgba(8, 8, 11, 0.3) 100%)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7.3px)",
          WebkitBackdropFilter: "blur(7.3px)",
        }}
      >
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="xb-header-logo">
              <Link to="/" className="logo1" onClick={handleClick}>
                <img src={logo} alt="Logo" style={{ height: "40px", width: "auto", filter: "brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0.1))" }} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li>
                    <a href="#service-section" onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('service-section');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      <span>About Us</span>
                    </a>
                  </li>

                  <li>
                    <a href="#contact-section" onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact-section');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Button */}
            <div className="header-btn">
              <a
                href="#contact-section"
                className="thm-btn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact-section");
                }}
              >
                Join the wishlist
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">
                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>

                <div className="xb-logo-mobile xb-hide-xl">
                  <Link to="/" rel="home">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>

                <div className="xb-header-mobile-search xb-hide-xl">
                  <form role="search" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search..."
                      name="s"
                      className="search-field"
                    />
                    <button className="search-submit" type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <nav className="xb-header-nav">
                  <MobileMenu onNavigate={() => setMobileActive(false)} />
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
