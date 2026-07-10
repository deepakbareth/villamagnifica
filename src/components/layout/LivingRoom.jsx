import React from 'react';
import livingRoomImg from '../../assets/living2.jpg';
import balconyImg from '../../assets/living1.jpg';

export default function LivingRoom() {
  const checklist = [
    'Sea View Balcony Access',
    'Open-Plan Design',
    'Flat-screen Smart TV',
    'Cozy Lounge Area',
    'Ambient Lighting',
    'Central Air Conditioning',
  ];

  return (
    <section id="living-room" className="py-24 bg-[#faf6ee]/50 select-none scroll-mt-20 overflow-hidden relative">

      {/* Decorative sparkle vector in background */}
      <div className="absolute top-[10%] right-[3%] pointer-events-none z-0 opacity-20">
        <svg className="w-48 h-48 text-gray-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Split Grid: Left side has images stack, Right side has description & checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* LEFT COLUMN (cols 1 to 6): Staggered Overlapping Visual Composition — below text on mobile */}
          <div className="lg:col-span-6 relative w-full h-[480px] lg:h-[620px] flex items-center justify-start order-2 lg:order-1">

            {/* Sparkle backdrop bottom left */}
            <div className="absolute -bottom-10 -left-10 pointer-events-none z-0 opacity-30">
              <svg className="w-28 h-28 text-gray-400/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
              </svg>
            </div>

            {/* Main Rounded Image Card (Living Room View) */}
            <div className="w-[85%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/30 relative z-10 group bg-gray-100">
              <img
                src={livingRoomImg}
                alt="Villa Magnifica Living Room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlapping Small Card (Balcony Sea View) */}
            <div className="absolute bottom-6 right-2 w-[55%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#faf6ee] z-20 group bg-gray-100">
              <img
                src={balconyImg}
                alt="Villa Balcony Table and Chairs View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

          {/* RIGHT COLUMN (cols 7 to 12): Text Details — above images on mobile */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">

            {/* Tagline */}
            <span className="text-xs md:text-sm font-sans font-bold text-[#8c6239] tracking-widest uppercase relative pl-6 flex items-center gap-2">
              <span className="absolute left-0 w-4 h-[1.5px] bg-[#8c6239]" />
              Premium Interiors
            </span>

            {/* Heading */}
            <h2 className="font-sans text-3xl md:text-[3.6vw] lg:text-[4.2vw] font-medium uppercase leading-[1.05] tracking-normal text-gray-900">
              Elegant Living <br />
              Space
            </h2>

            {/* Description */}
            <p className="text-gray-700 font-sans text-sm md:text-[15px] leading-relaxed max-w-xl font-normal mt-2">
              Step into a bright, open-plan living area designed for effortless relaxation. Floor-to-ceiling sliding glass doors frame panoramic sea views, blending the outdoor beauty of Halkidiki with elegant, minimalist indoor spaces. Equipped with comfortable plush sofas, ambient lighting, and modern entertainment systems, it is the perfect spot for families and groups to gather and create memories together.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-4 pt-6 border-t border-gray-200/50">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#f97316]/10 text-[#f97316] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-sans text-[13.5px] text-gray-800 font-semibold tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
