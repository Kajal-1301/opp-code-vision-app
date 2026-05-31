"use client";

import { playfair } from "../lib/fonts";
import {FaBrain , FaBullhorn, FaMobileScreenButton, FaTv, FaChartLine, FaHeartPulse, FaCartShopping , FaCode , FaGlobe , FaMagnifyingGlass } from 'react-icons/fa6'
import { RiFlowerFill } from "react-icons/ri";
import { BsBagDashFill } from "react-icons/bs";


 const services = [
  {
    icon: FaBrain,
    title: "Custom AI Solutions & ML",
    desc: "Enterprise AI implementation, predictive analytics, NLP, computer vision, chatbots & intelligent automation",
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile App Development",
    desc: "iOS, Android, React Native, Flutter - Enterprise mobile apps for smartphones & tablets",
  },
  {
    icon: FaTv,
    title: "TV Application Development",
    desc: "Android TV, Apple TV, Smart TV, Fire TV, Roku & OTT platform development",
  },
  {
    icon: FaChartLine,
    title: "SFA Management Software",
    desc: "Sales Force Automation, field force tracking, lead management, route optimization & sales analytics",
  },
  {
    icon: FaHeartPulse,
    title: "Healthcare & Medical IT",
    desc: "Hospital management, clinic software, telemedicine, EMR/EHR, patient portals & medical billing",
  },
  {
    icon: RiFlowerFill,
    title: "Skin Care Management",
    desc: "Dermatology clinic management, patient tracking, treatment plans, before/after photos & appointments",
  },
  {
    icon: FaCartShopping,
    title: "Ecommerce Portal Development",
    desc: "B2B, B2C, multi-vendor marketplaces, payment gateways, inventory & order management systems",
  },
  {
    icon: BsBagDashFill,
    title: "Business Development Portal",
    desc: "CRM, ERP, project management, collaboration tools, BI dashboards & workflow automation",
  },
  {
    icon: FaCode,
    title: "Enterprise Web Development",
    desc: "Corporate websites, web portals, PWAs, custom web applications & API development",
  },
  {
    icon: FaGlobe,
    title: "Online Presence Management",
    desc: "Brand management, reputation monitoring, social media management & content strategy",
  },
  {
    icon: FaMagnifyingGlass,
    title: "Enterprise SEO & GSO",
    desc: "Technical SEO, local SEO, international SEO, Google Search Optimization & keyword strategy",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing & Growth",
    desc: "PPC campaigns, social media ads, content marketing, email marketing & conversion optimization",
  },
];

const Services = () => {

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
            ✦ OUR SERVICES
          </span>

          <h2 className={`${playfair.className} mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
            Enterprise software development services
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-2">
            Custom AI solutions and enterprise software for every industry —
            from startups to Fortune 500.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className=" group relative p-8 rounded-3xl border border-slate-200 bg-white hover:bg-slate-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" >
                <div className="mb-6">
                  <Icon className="text-4xl text-[#f59e0b]" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-white transition">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-500 group-hover:text-slate-300 transition">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center text-[#f59e0b] font-medium">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;