"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [showNavbar, setShowNavbar] = useState(true);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Portfolio", id: "portfolio" },
        { name: "About", id: "about" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    const handleNavClick = (id, name) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveLink(name);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
                setMenuOpen(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div>
                        <Image
                            width={180}
                            height={60}
                            className="object-contain"
                            priority
                            src="/oppcodevision-logo.png"
                            alt="Logo"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-black font-medium">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                onClick={() => handleNavClick(link.id, link.name)}
                                className={`relative cursor-pointer text-[16px] transition-colors duration-200
                                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                                    after:transition-transform after:duration-200 after:origin-left
                                    ${activeLink === link.name  
                                        ? "text-[#f59e0b] after:bg-[#f59e0b] after:scale-x-100"
                                        : "text-black after:bg-[#f59e0b] after:scale-x-0 hover:text-[#f59e0b] hover:after:scale-x-100"  }`} >
                                {link.name}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}  
                        className="md:hidden text-black text-3xl"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (
                    <div className="md:hidden pb-6 flex flex-col gap-4 text-black font-medium">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                onClick={() => { handleNavClick(link.id, link.name); setMenuOpen(false); }}
                                className={`cursor-pointer text-[15px] transition-colors duration-200 w-fit border-b-2
                                    ${activeLink === link.name 
                                        ? "text-[#f59e0b] border-[#f59e0b]"
                                        : "border-transparent hover:text-[#f59e0b] hover:border-[#f59e0b]"
                                    }`}
                            >
                                {link.name} 
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;