// "use client"

// import { playfair } from "../lib/fonts";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { testimonials } from "../../data/data";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center">
//           <span className="inline-flex items-center px-5 py-2 border rounded-full text-sm font-medium text-[#f59e0b] border-orange-200">
//             ✦ CLIENT STORIES
//           </span>

//           <h2 className={` ${playfair.className} mt-6 text-4xl md:text-5xl font-bold text-slate-900`}>
//             What Are Clients Say
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500">
//             Don't just take our word for it
//           </p>
//         </div>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-[#faf8f5] border rounded-4xl p-12 md:p-16">

//                 <div className="flex justify-center">
//                   <span className="px-4 py-2 rounded-full border border-amber-300 text-amber-500 text-sm font-medium">
//                     {item.tag}
//                   </span>
//                 </div>

//                 <div className="flex justify-center gap-1 mt-6">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i}>⭐</span>
//                   ))}
//                 </div>

//                 <p className="text-center text-xl leading-relaxed italic text-gray-700 max-w-4xl mx-auto mt-8">
//                   "{item.review}"
//                 </p>

//                 <div className="flex justify-center items-center gap-4 mt-10">

//                   <div className="h-14 w-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl border-2 border-amber-400">
//                     {item.initials}
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-lg">
//                       {item.name}
//                     </h4>

//                     <p className="text-gray-500">
//                       {item.role}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client"

import { playfair } from "../lib/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "../../data/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 border rounded-full text-xs md:text-sm font-medium text-[#f59e0b] border-orange-200">
            ✦ CLIENT STORIES
          </span>

          <h2 className={`${playfair.className} mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900`}>
            What Our Clients Say
          </h2>

          <p className="mt-3 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-2">
            Don't just take our word for it
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-10 md:pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#faf8f5] border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mx-1">

                {/* Tag */}
                <div className="flex justify-center">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-300 text-amber-500 text-xs md:text-sm font-medium">
                    {item.tag}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mt-4 md:mt-6 text-sm md:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed italic text-gray-700 max-w-4xl mx-auto mt-5 md:mt-8 px-2">
                  "{item.review}"
                </p>

                {/* Author */}
                <div className="flex justify-center items-center gap-3 md:gap-4 mt-7 md:mt-10">
                  <div className="h-11 w-11 md:h-14 md:w-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base md:text-xl border-2 border-amber-400 shrink-0">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="font-bold text-base md:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
