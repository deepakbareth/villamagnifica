import React from 'react';
import poolImg from '../../assets/hero2.jpg';
import aboutImg from '../../assets/hilight.jpg';
import heroImg from '../../assets/hilight2.jpg';

export default function WhyGuestsLove() {
  const checklist = [
    'Private Pool',
    'Sea View',
    'Elevator',
    'Private Parking',
    '3 Bedrooms',
    '3 Bathrooms',
    'Fast WiFi',
    'Family Friendly',
    'Large Private Garden',
    'Outdoor Dining Area',
  ];

  return (
    <section id="highlights" className="py-24 bg-[#f5efe4] relative overflow-hidden">

      {/* Decorative sunburst vector at the bottom left */}
      <div className="absolute -bottom-10 left-[8%] pointer-events-none z-0 opacity-30">
        <svg className="w-24 h-24 text-[#e2d4be]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Split Grid: 3 columns on large desktop, stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* COLUMN 1 (cols 1 to 5): Tagline, Section Title, Checklist, and Intro */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Tagline */}
            <span className="text-xs md:text-sm font-sans font-bold text-[#8c6239] tracking-widest uppercase relative pl-6 flex items-center gap-2">
              <span className="absolute left-0 w-4 h-[1.5px] bg-[#8c6239]" />
              Our Highlights
            </span>

            {/* Title */}
            <h2 className="font-sans text-3xl md:text-[2.6vw] font-medium uppercase leading-[1.1] tracking-normal text-gray-900">
              Why Guests Love <br />
              Villa Magnifica
            </h2>

            {/* Premium Custom Checklist */}
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 mt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
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

            {/* Intro text */}
            <p className="text-gray-700 font-sans text-sm md:text-[14.5px] leading-relaxed font-normal mt-3 max-w-md">
              Every detail of Villa Magnifica is designed to provide families and groups with the ultimate private escape in a premier location.
            </p>

            {/* Detail Block 1: Infinity Pool */}

            <div className="flex flex-col gap-2 mt-4 pt-6 border-t border-gray-200/50">
              <h3 className="font-sans text-[17px] font-bold text-gray-900 uppercase tracking-wider">
                Infinity Pool
              </h3>
              <p className="text-gray-700 font-sans text-xs md:text-[13.5px] leading-relaxed">
                Enjoy breathtaking sea views while swimming in your private infinity pool, surrounded by comfortable sunbeds and a lush, landscaped Mediterranean garden.
              </p>
            </div>

            {/* Detail Block 2: Prime Location */}
            <div className="flex flex-col gap-2 pt-4">
              <h3 className="font-sans text-[17px] font-bold text-gray-900 uppercase tracking-wider">
                Prime Location
              </h3>
              <p className="text-gray-700 font-sans text-xs md:text-[13.5px] leading-relaxed">
                Only 7 minute walking or 1 minute by car from Halkidiki’s most sought-after beaches and beach bars – Anemos Beach Bar, Cabana Beach Bar and Seazon Beach Bar. Enjoy crystal-clear waters, golden sand and a vibrant summer atmosphere just steps away from your villa. Within only 5 minutes by car, you can also reach other famous destinations such as Lago Beach, Sea Side Experience, Casa Mercedes Bar and many more of Halkidiki’s stunning coastline.
              </p>
            </div>

          </div>

          {/* COLUMN 2 (cols 6 to 8): Stacked Middle Detail Blocks */}
          <div className="lg:col-span-3 flex flex-col gap-8 lg:mt-24">

            {/* Detail Block 3: Three Bedrooms */}
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-[17px] font-bold text-gray-900 uppercase tracking-wider">
                Three Bedrooms
              </h3>
              <p className="text-gray-700 font-sans text-xs md:text-[13.5px] leading-relaxed">
                Rest in three spacious, elegantly designed bedrooms paired with modern bathrooms, offering the perfect blend of comfort and privacy for guests.
              </p>
            </div>

            {/* Detail Block 4: Elevated Comfort */}
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-[17px] font-bold text-gray-900 uppercase tracking-wider">
                Elevated Comfort
              </h3>
              <p className="text-gray-700 font-sans text-xs md:text-[13.5px] leading-relaxed">
                From the fully equipped outdoor kitchen to the private elevator, every modern amenity is provided to ensure a seamless holiday experience.
              </p>
            </div>

            {/* Image Card below Elevated Comfort */}
            <div className="w-full h-[220px] lg:h-[360px] rounded-[1.8rem] overflow-hidden shadow-lg border border-white/30 group mt-4 relative bg-gray-100">
              <img
                src={aboutImg}
                alt="Villa Balcony Details"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

          {/* COLUMN 3 (cols 9 to 12): Two stacked vertical image cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative lg:mt-6 w-full">

            {/* Sunburst backdrop top right */}
            <div className="absolute -top-10 -right-6 pointer-events-none z-0">
              <svg className="w-20 h-20 text-[#e2d4be]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
              </svg>
            </div>

            {/* Sparkle backdrop bottom left */}
            <div className="absolute -bottom-12 -left-10 pointer-events-none z-0 opacity-40">
              <svg className="w-28 h-28 text-gray-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
              </svg>
            </div>

            {/* Image Card 1: Sunset/Pool View */}
            <div className="w-full h-[220px] lg:h-[370px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/30 relative z-10 group bg-gray-100">
              <img
                src={poolImg}
                alt="Villa Magnifica Infinity Pool Night View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Image Card 2: Exterior Deck View */}
            <div className="w-full h-[220px] lg:h-[370px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/30 relative z-10 group bg-gray-100">
              <img
                src={heroImg}
                alt="Villa Magnifica Exterior Deck View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
