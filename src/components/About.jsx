"use client";
import CountUp from "react-countup";
import { playfair } from "../lib/fonts";
import { FaBriefcase, FaSmile, FaAward, FaUsers } from "react-icons/fa";

const stats = [
  {
    icon: FaBriefcase,
    number: "150",
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: FaSmile,
    number: "98",
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: FaAward,
    number: "5",
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: FaUsers,
    number: "24",
    suffix: "+",
    label: "Team Members",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
            ✦ WHO WE ARE
          </span>

          <h2 className={`${playfair.className} mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
            About Opp Code Vision
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-2">
            Custom AI Solutions & Enterprise Software Development Since 2019
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-orange-200 text-[#f59e0b] text-xs md:text-sm font-medium">
              ● Est. 2019 — 5 Years of Excellence
            </span>

            <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl font-bold leading-tight text-black">
              Trusted by
              <span className="block text-[#f59e0b]">
                Fortune 500
              </span>
              & Growing Businesses
            </h2>

            <div className="w-16 md:w-20 h-1 bg-amber-500 my-4 md:my-6"></div>

            <p className="text-gray-600 leading-7 md:leading-8 text-sm md:text-base">
              Since 2019, OPP Code Vision has delivered enterprise-grade
              software solutions across industries. We specialize in Custom AI
              Solutions, Mobile & TV Applications, SFA Management,
              Healthcare IT Systems, Ecommerce Portals, and Business
              Automation.
            </p>

            <p className="text-gray-600 leading-7 md:leading-8 mt-4 md:mt-6 text-sm md:text-base">
              Our team of <strong>50+ engineers</strong>, AI specialists,
              and digital strategists serve clients globally — from startups
              to Fortune 500 companies with
              <strong> 98% client satisfaction.</strong>
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href="#contact"
                className="inline-block bg-[#f59e0b] hover:bg-amber-600 transition-all text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base">
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4 md:space-y-6">

         
            <div className="hidden sm:flex bg-[#f59e0b] rounded-3xl h-48 md:h-64 lg:h-80 items-center justify-center shadow-lg">
              <FaUsers className="text-white text-4xl md:text-5xl" />
            </div>

            {/* Live Counters */}
         
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-2">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-4 md:p-5 lg:p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 lg:mb-5 rounded-xl md:rounded-2xl border border-orange-200 flex items-center justify-center">
                      <Icon className="text-lg md:text-xl lg:text-2xl text-[#f59e0b]" />
                    </div>

                    {/* Number */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0f172a]">
                      <CountUp
                        end={item.number}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {item.suffix}
                    </h3>

                    {/* Label */}
                    <p className="mt-2 md:mt-3 text-gray-500 text-xs md:text-sm lg:text-base font-medium leading-tight">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
