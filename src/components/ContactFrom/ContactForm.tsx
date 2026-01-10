import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

// Import your icons
import userIcon from "../../images/icon/user-balck-icon.svg";
import emailIcon from "../../images/icon/sms-balck-icon.svg";
import phoneIcon from "../../images/icon/call-icon02.svg";
import messageIcon from "../../images/icon/messages-icon.svg";
import arrowIcon from "../../images/icon/rotate-arrow-black02.svg";

const ContactForm: React.FC = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (validator.allValid()) validator.hideMessages();
    else validator.showMessages();
  };

  return (
    
    <form
      action="https://hook.us2.make.com/lskg5ri4xwwvbmlo95vpaoi6n6rdih3o"
      method="POST"
      className="xb-contact-input-form"
    >
      <div className="row mt-none-20">
        {/* Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Your Name*</label>
            <img src={userIcon} alt="user" />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Email Address*</label>
            <img src={emailIcon} alt="email" />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="tel"
              value={forms.phone}
              onChange={changeHandler}
              required
              autoComplete="tel"
            />
            <label htmlFor="author-phone">Phone*</label>
            <img src={phoneIcon} alt="phone" />
          </div>
          {validator.message("phone", forms.phone, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">Your Message..</label>
            <img src={messageIcon} alt="message" />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Join the Wishlist
          <span className="xb-icon">
            <img src={arrowIcon} alt="arrow" />
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
      <input
        type="hidden"
        name="_redirect"
        value={`${window.location.origin}/thanks`}
      />
    </form>
  );
};

export default ContactForm;
