import React, { useState } from "react";
import serviceBg from "../../images/bg/service-bg.png";
import "./ServiceSection.css";
import img01 from "../../images/service/img01.jpg";
import img02 from "../../images/service/img02.jpg";
import img03 from "../../images/service/img03.jpg";
import img04 from "../../images/service/img04.jpg";
import img05 from "../../images/service/img05.jpg";
import img06 from "../../images/service/img06.jpg";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const ServiceArrow: React.FC = () => (
  <span className="service-item-arrow" aria-hidden="true">
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
);

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Centralized operations",
    desc: "Manage briefs, requests, and tasks from a single platform. Gravia turns unstructured inputs into clear, actionable workflows for your team.",
    img: img01,
  },
  {
    id: 2,
    title: "AI task intelligence",
    desc: "Gravia extracts key insights from emails and briefs, detects urgency, and automatically creates prioritized tasks assigned to the right people.",
    img: img02,
  },
  {
    id: 3,
    title: "Risk & crisis prevention",
    desc: "Detect critical issues before they escalate. Gravia flags urgent requests, missed signals, and operational risks in real time.",
    img: img03,
  },
  {
    id: 4,
    title: "Performance intelligence",
    desc: "Monitor live ad performance across platforms and receive expert AI insights on when and how to optimize campaigns—without increasing spend.",
    img: img04,
  },
  {
    id: 5,
    title: "Creative optimization",
    desc: "Identify underperforming creatives, incorrect formats, and winning variations. Gravia helps teams adjust faster and avoid costly mistakes.",
    img: img05,
  },
  {
    id: 6,
    title: "Human-in-the-loop AI",
    desc: "AI suggests, humans decide. Gravia provides recommendations while keeping full control over decisions that impact budgets and clients.",
    img: img06,
  },
];

const ServiceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const canHover =
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;



  return (
    <section id="service-section" className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="sub-title" style={{ display: 'block', marginBottom: '10px' }}>About Us</span>
              <h2 className="title" style={{ textAlign: 'center', width: '100%' }}>
                Keeping marketing teams aligned, efficient, and safe
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Service Boxes */}
      <div className="xb-service-wrap bg_img" style={{
        backgroundImage: `url(${serviceBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${activeId === service.id ? "active" : ""
              }`}
            onMouseEnter={() => {
              if (canHover) setActiveId(service.id);
            }}
            onClick={() =>
              setActiveId((current) => (current === service.id ? null : service.id))
            }
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <span className="service-item-title">
                      <span>{service.title}</span>
                      <ServiceArrow />
                    </span>
                  </h3>
                </div>
                <p className="xb-item--content">{service.desc}</p>
                <div className="service-image-wrap" aria-hidden="true">
                  <div className="service-image-box">
                    <img src={service.img} alt="" />
                  </div>
                </div>
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <span className="service-item-title">
                    <span>{service.title}</span>
                    <ServiceArrow />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
