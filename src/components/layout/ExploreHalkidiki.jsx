import React from 'react';
import cabanaImg from '../../assets/cabana_beach.png';
import seasonImg from '../../assets/season_beach.png';
import xeniaImg from '../../assets/xenia_beach.png';

export default function ExploreHalkidiki() {
  const beachClubs = [
    {
      img: cabanaImg,
      title: 'Cabana Beach Bar',
      time: '7 min walk',
      desc: 'Walk to some of the most beautiful sandy shores in Greece within just 7 minutes walking distance from your villa.',
    },
    {
      img: seasonImg,
      title: 'Season Beach Bars',
      time: '7 min walk',
      desc: 'Enjoy exclusive beach club vibes and refreshing cocktails at the nearby Season Beach bar, just a short walk away.',
    },
    {
      img: xeniaImg,
      title: 'Xenia Beach Bars',
      time: '7 min walk',
      desc: 'Discover beautiful turquoise waters and golden sandy shores at Xenia Beach bar, located only 7 minutes walking away.',
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-[#f5efe4] select-none scroll-mt-20 overflow-hidden relative">

      {/* Background Watermark Text for High-End Branding */}
      <div className="absolute top-[8%] left-[-5%] text-[#eae1d0] font-sans font-black text-[12vw] leading-none uppercase tracking-widest pointer-events-none select-none opacity-40 z-0">
        Halkidiki
      </div>

      {/* Decorative vector sparkle backdrop */}
      <div className="absolute bottom-[10%] left-[2%] pointer-events-none z-0 opacity-40">
        <svg className="w-40 h-40 text-gray-400/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header Block: Elegant Two-Column Layout */}
        <div className="mb-20 flex flex-col gap-5 text-left">
          <span className="text-xs md:text-sm font-sans font-bold text-[#8c6239] tracking-widest uppercase relative pl-6 flex items-center gap-2">
            <span className="absolute left-0 w-4 h-[1.5px] bg-[#8c6239]" />
            Local Guide
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-sans text-3xl md:text-[3.6vw] lg:text-[4.2vw] font-medium uppercase leading-[1.05] tracking-normal text-gray-900">
                Explore the Best <br className="hidden md:inline" />
                of Halkidiki
              </h2>
            </div>
            <div className="lg:col-span-5 pb-2">
              <p className="text-gray-700 font-sans text-sm md:text-xl leading-relaxed font-normal">
                Perfectly positioned in Palluri, our villa offers immediate access to pristine turquoise waters, elite beach clubs, and charming Mediterranean coastline.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {beachClubs.map((club, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[2.5rem] bg-[#faf6ee]/70 border border-white/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out p-6 group"
            >
              {/* Image Container with Zoom effect */}
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/40 shadow-inner relative bg-gray-100">
                <img
                  src={club.img}
                  alt={club.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Distance Badge on top of image */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/50 px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="font-sans text-[11px] font-bold text-[#8c6239] uppercase tracking-widest">
                    {club.time}
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="flex flex-col gap-3 mt-6 flex-grow">
                {/* Title with decorative bullet */}
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8c6239] shadow-sm flex-shrink-0 group-hover:bg-[#f97316] transition-colors duration-300" />
                  <h3 className="font-sans text-xl font-bold text-gray-900 uppercase tracking-wide">
                    {club.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-sans text-[13.5px] leading-relaxed flex-grow">
                  {club.desc}
                </p>

                {/* Premium Interactive Hover Link */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200/40 text-gray-900 group-hover:text-[#8c6239] transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-widest">
                    Explore Location
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
