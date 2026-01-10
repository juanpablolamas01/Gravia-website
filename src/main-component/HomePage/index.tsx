import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/hero/Hero";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";


const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Gravia | All-In-One Marketing and Crisis Prevention Tool ";
  }, []);

  return (
    <Fragment>
        <div className='All-In-One AI Powered Marketing Platform'>
          <div className="body_wrap o-clip">
            <Header />
            <main>
              <HeroSection/>
              <ServiceSection/>
              <ContactSection/>
            </main>
            <Footer />
            <Scrollbar />
          </div>
        </div>
    </Fragment>
  );
};

export default HomePage;
