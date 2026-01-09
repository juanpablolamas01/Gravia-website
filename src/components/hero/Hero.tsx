import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import "bootstrap-icons/font/bootstrap-icons.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero hero-style pos-rel">
      {/* Spline 3D Background */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Spline scene="https://prod.spline.design/bfljctALxrqSnuJT/scene.splinecode" />
      </div>

      {/* Content Overlay */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          {/* ---------- Center Content ---------- */}
          <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
            <div className="hero-content" style={{ textAlign: "center" }}>
              <h2 className="title scale-animation wow">
                Your all-in-one marketing and crisis prevention platform
              </h2>
              <p className="sub-title scale-animation wow">
                Maximize your marketing team’s efficiency, prevent operational failures, 
                and optimize campaigns with AI-driven
                 insights—achieving better results without increasing spend.
              </p>
              <div className="hero-btn scale-animation wow">
                <Link className="thm-btn agency-btn" to="/about">
                  <span className="text">Join the wishlist</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Features ---------- */}
        <div className="row mt-55 hero-features-row">
          <div className="col-lg-4 col-md-6 mt-30 d-flex">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <i className="bi bi-radar"></i>
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Early risk detection</h2>
                  <p className="xb-item--content">
                    Detect operational risks and performance drops before they escalate,
                     using real-time signals from tasks, emails, and campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30 d-flex">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <i className="bi bi-robot"></i>
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">AI-powered operations</h2>
                  <p className="xb-item--content">
                    Turn briefs, emails, and requests into structured tasks 
                    with clear priorities—automatically assigned to the right people.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30 d-flex">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Smarter campaign optimization</h2>
                  <p className="xb-item--content">
                    Monitor live ad performance across platforms and get expert 
                    AI recommendations to improve results without increasing spend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
