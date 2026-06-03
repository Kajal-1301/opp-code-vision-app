"use client";

import { playfair } from "../lib/fonts";
import { FaRocket, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import BackgroundCircles from "./BackgroundCircles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen bg-black flex items-center
          justify-center overflow-hidden pt-32 sm:pt-24 px-4 sm:px-6 lg:px-8"
      >
        <BackgroundCircles />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Heading */}
          <h1
            className={` ${playfair.className} font-bold leading-tight text-4xl sm:text-5xl
              md:text-5xl lg:text-6xl max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto`}
          >
            <TypeAnimation
              sequence={[
                `Custom AI Solutions & 
                 Enterprise Software 
                 Development`,
                2000,
              ]}
              speed={80}
              cursor={false}
              repeat={0}
              style={{ whiteSpace: "pre-line" }} />
          </h1>

          {/* Paragraph */}
          <p className="mt-6 sm:mt-8 text-gray-300 text-sm sm:text-base
            md:text-lg leading-7 sm:leading-8 max-w-xs sm:max-w-2xl
            lg:max-w-4xl mx-auto"
          >
            Mobile Apps • TV Applications • SFA Management • Healthcare IT •
            Ecommerce Portals • Business Automation • SEO & Digital Marketing.
            Trusted by Fortune 500 & Growing Businesses.
          </p>

          {/* Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center
            justify-center gap-4 sm:gap-5"
          >
          
            <a
              href="#services"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400
                transition-all duration-300 text-black font-semibold px-6 sm:px-8
                py-3 sm:py-4 rounded-full flex items-center justify-center
                gap-3 text-sm sm:text-base"
            >
              <FaRocket />
              Explore Enterprise Solutions
            </a>

       
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/20
                hover:border-yellow-500 transition-all duration-300 px-6 sm:px-8
                py-3 sm:py-4 rounded-full flex items-center justify-center
                gap-3 text-sm sm:text-base"
            >
              <FaPhoneAlt />
              Get Free Consultation
            </a>
          </div>

     
          <div className="mt-16 flex flex-col items-center gap-2
            text-gray-300 text-sm sm:text-base"
          >
            Discover More
            <FaChevronDown className="text-yellow-500 text-xl animate-bounce" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;