import React from "react";
import { Link } from "react-router-dom";

// Image imports
import locationIcon from "../../images/icon/location-icon.svg";
import callIcon from "../../images/icon/call-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer footer-style-one pt-60 pb-60"
    >
      <div className="xb-footer-wrap">
        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <img src={locationIcon} alt="location" />
            <span className="contact-method">Maldonado 1565, Montevideo, Uruguay</span>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © 2025 <Link to="/">Gravia</Link>, All rights reserved.
            </p>
          </div>

          <div className="contact-item">
            <a href="tel:+112304528597">
              <img src={callIcon} alt="call" />
            </a>
            <a className="contact-method" href="tel:+112304528597">
              +(598) 95 855 999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
