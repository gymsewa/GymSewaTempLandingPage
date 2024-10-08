import React, { useEffect } from 'react';
import { Header, Banner, About, Workouts, Pricing, Community, Faq, Join, Footer } from './components/index';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      {/* Header with navigation */}
      <Header />
      
      {/* Sections with unique IDs */}
      <section id="banner">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="workouts">
        <Workouts />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="community">
        <Community />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="join">
        <Join />
      </section>

      <Footer />

      <div className="fixedwhatapp">
        <a className="phonenumber" href="https://api.whatsapp.com/send?phone=917323018308&amp;text=Hello%21%20GymSewa%20" target="_blank" rel="noopener noreferrer">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48">
              {/* WhatsApp SVG content */}
            </svg>
          </span>
          <p>+91 7323018308</p>
        </a>
      </div>
    </div>
  );
}

export default App;
