import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer footer-style-one pt-60 pb-60"
    >
      <div className="xb-footer-wrap">
        {/* Footer Bottom */}
        <div className="xb-footer-bottom xb-footer-bottom--center">
          <div className="contact-item copyright-item">
            <p>
              Copyright © 2026 <Link to="/">Gravia</Link>, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
