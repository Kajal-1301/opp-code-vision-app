import Link from "next/link";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/p/Opp-Code-Vision-100065629263058/?_rdr",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/CodeOpp",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/oppcodevision/?hl=en",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/oppcodevision/?originalSubdomain=in",
    },
  ];

  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-10 pb-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#f7a600] mb-6">
              OPP Code Vision
            </h2>

            <p className="text-gray-300 leading-7 text-md">
              Custom AI Solutions & Enterprise Software Development. Mobile
              Apps, TV Applications, SFA Management, Healthcare IT, Ecommerce
              Portals, Business Automation, SEO & Digital Marketing.
            </p>

            <div className="flex gap-4 mt-8">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#f7a600] flex items-center justify-center text-xl hover:bg-orange-500 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#f7a600] mb-6">
              Services
            </h2>

            <ul className="space-y-4 text-gray-300 text-md">
              <li>Custom AI Solutions</li>
              <li>Mobile & TV Apps</li>
              <li>SFA Management</li>
              <li>Healthcare IT</li>
              <li>Ecommerce Portals</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#f7a600] mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300 text-md">
              <li>
                <Link href="#home" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="hover:text-orange-500 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-orange-500 transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#f7a600] mb-6">
              Contact Info
            </h2>

            <div className="space-y-4 text-gray-300 text-md leading-8">
              <p>
                276, Brij Vihar,
                <br />
                Jagatpura, Jaipur,
                <br />
                Rajasthan 302017
              </p>

              <p>
                +91 7728942261
                <br />
                +91 9610643369
              </p>

              <p>oppcodevision@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-md">
            © 2019-2024 OPP Code Vision. All rights reserved. | Proprietary &
            Confidential
          </p>

          <p className="text-gray-500 mt-3 text-sm">
            Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}