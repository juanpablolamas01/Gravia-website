import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-section"
      className="contact-section pt-150 pb-140"
    >
      <div className="container">
        <div className="row mt-none-50 justify-content-center">          
          {/* Right side - Form */}
          <div className="col-lg-6 mt-50">
            <div className="xb-contact-form xb-border">
              <div className="form-heading text-center mb-30">
                <h3 className="title">Join the conversation</h3>
                <p className="sub-title">
                  Reach out to explore Gravia and get early access updates.
                </p>
              </div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
