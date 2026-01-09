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
    img: img01,
  },
  {
    id: 3,
    title: "Risk & crisis prevention",
    desc: "Detect critical issues before they escalate. Gravia flags urgent requests, missed signals, and operational risks in real time.",
    img: img01,
  },
  {
    id: 4,
    title: "Performance intelligence",
    desc: "Monitor live ad performance across platforms and receive expert AI insights on when and how to optimize campaigns—without increasing spend.",
    img: img01,
  },
  {
    id: 5,
    title: "Creative optimization",
    desc: "Identify underperforming creatives, incorrect formats, and winning variations. Gravia helps teams adjust faster and avoid costly mistakes.",
    img: img01,
  },
  {
    id: 6,
    title: "Human-in-the-loop AI",
    desc: "AI suggests, humans decide. Gravia provides recommendations while keeping full control over decisions that impact budgets and clients.",
    img: img01,
  },
];

const ServiceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);



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
            onMouseEnter={() => setActiveId(service.id)}
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <span>{service.title}</span>
                  </h3>
                </div>
                <p className="xb-item--content">{service.desc}</p>
                {activeId === service.id && (
                  <div className="service-image-wrap" aria-hidden="true">
                    <div className="service-image-box">
                      <img src={service.img} alt="" />
                    </div>
                  </div>
                )}
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <span>{service.title}</span>
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
