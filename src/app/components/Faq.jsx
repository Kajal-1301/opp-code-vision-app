"use client";

import { playfair } from "../lib/fonts";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { faqs } from "../../data/data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
            ✦ FAQ
          </span>

          <h2 className={`${playfair.className} mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 px-2`}>
            People Also Ask About OPP Code Vision
          </h2>

          <p className="mt-3 md:mt-6 max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-slate-500 px-2">
            Common questions about our software development services in Jaipur, Ajmer, Udaipur, Bhilwara, Beawar & Bijainagar
          </p>
        </div>

        <div className="space-y-3 md:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl md:rounded-3xl border overflow-hidden transition-all
                ${open === index ? "border-amber-300" : "border-gray-300"}`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left gap-3"
              >
                <h3 className="font-semibold text-sm md:text-base lg:text-lg text-gray-800">
                  {faq.question}
                </h3>

                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-100 flex items-center justify-center text-[#f59e0b] shrink-0">
                  {open === index ? (
                    <ImCross size={14} className="md:text-[18px]" />
                  ) : (
                    <FaPlus size={14} className="md:text-[18px]" />
                  )}
                </div>
              </button>

              {open === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t">
                  <p className="pt-4 md:pt-6 text-sm md:text-base text-gray-600 leading-7 md:leading-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
