"use client";

import { useState } from "react";
import { playfair } from "../lib/fonts";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // success or error message
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });

                setTimeout(() => {
                    setStatus("");
                }, 3000);

            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-16 lg:py-24 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12 lg:mb-14">
                    <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
                        ✦ CONTACT US
                    </span>
                    <h2 className={`${playfair.className} mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
                        Get In Touch
                    </h2>
                    <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-2">
                        Ready to start your next project? Let's talk!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 md:gap-8 lg:gap-12 xl:gap-16">

                    {/* LEFT CARD */}
                    <div className="bg-white rounded-2xl md:rounded-4xl p-6 sm:p-8 md:p-10 border shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-black">
                            Contact Information
                        </h3>
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4 md:gap-5">
                                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F4A300] text-white flex items-center justify-center shrink-0">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-sm md:text-base">Address</h4>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                                        276, Brij Vihar, Jagatpura,<br />
                                        Jaipur, Rajasthan 302017
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-5">
                                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F4A300] text-white flex items-center justify-center shrink-0">
                                    <FaPhoneAlt size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-sm md:text-base">Phone</h4>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base">+91 7728942261</p>
                                    <p className="text-gray-600 text-sm md:text-base">+91 9610643369</p>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-5">
                                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F4A300] text-white flex items-center justify-center shrink-0">
                                    <FaEnvelope size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-sm md:text-base">Email</h4>
                                    <p className="text-gray-600 mt-1 text-sm md:text-base break-all">
                                        oppcodevision@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM CARD */}
                    <div className="bg-white rounded-2xl md:rounded-4xl p-6 sm:p-8 shadow-sm border">

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl text-sm">
                                ✅ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                                ❌ Something went wrong. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block mb-1.5 md:mb-2 font-medium text-black text-sm md:text-base">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full h-11 md:h-12 text-gray-500 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#F4A300] text-sm md:text-base transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1.5 md:mb-2 font-medium text-black text-sm md:text-base">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Your email"
                                        required
                                        className="w-full h-11 md:h-12 text-gray-500 rounded-xl border border-gray-300 px-4 outline-none focus:border-[#F4A300] text-sm md:text-base transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1.5 md:mb-2 font-medium text-black text-sm md:text-base">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    required
                                    className="w-full h-11 md:h-12 rounded-xl border text-gray-500 border-gray-300 px-4 outline-none focus:border-[#F4A300] text-sm md:text-base transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block mb-1.5 md:mb-2 font-medium text-black text-sm md:text-base">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    required
                                    className="w-full rounded-xl border text-gray-500 border-gray-300 p-4 outline-none focus:border-[#F4A300] text-sm md:text-base transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#F4A300] hover:bg-[#de9500] disabled:opacity-50 w-full text-white py-3.5 md:py-4 rounded-xl font-semibold flex items-center gap-3 transition-all justify-center text-sm md:text-base"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                <FaArrowRight size={16} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}