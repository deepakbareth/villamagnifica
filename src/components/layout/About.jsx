import React from 'react';
import aboutImg from '../../assets/about1.jpg';
import heroImg from '../../assets/about3.jpg';

export default function About() {
  const items = [
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Our Vision',
      desc: 'To become a trusted luxury retreat in Halkidiki, known for exceptional hospitality and timeless design.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Our Mission',
      desc: 'To provide every guest with a seamless, private, and memorable stay combining premium comfort.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Our History',
      desc: 'Founded with a passion for elegant coastal living, growing from a dream into a distinctive destination.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-28 bg-[#f5efe4] scroll-mt-20 overflow-hidden relative">

      {/* Decorative sparkle in the lower left background */}
      <div className="absolute -bottom-16 left-[5%] pointer-events-none z-0 opacity-40">
        <svg className="w-36 h-36 text-gray-400/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left Column: Heading, Intro, and Amenities */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Section Start Indicator */}
            <span className="text-xs md:text-sm font-sans font-bold text-[#8c6239] tracking-widest uppercase relative pl-6 flex items-center gap-2">
              <span className="absolute left-0 w-4 h-[1.5px] bg-[#8c6239]" />
              About Us
            </span>

            <h2 className="relative z-30 font-sans text-3xl md:text-[3.6vw] lg:text-[3.8vw] font-medium uppercase leading-[1.05] tracking-normal text-gray-900 whitespace-nowrap">
              REFINED SANCTUARY OF PRIVACY <br />
              AND NATURAL BEAUTY
            </h2>

            <p className="text-gray-700 font-sans text-sm md:text-[15px] leading-relaxed max-w-xl font-normal">
              Villa Magnifica Palluri was created to offer a refined escape where privacy, comfort, and stunning sea views come together. We welcome guests seeking a peaceful holiday experience, surrounded by elegance, nature, and effortless access to Halkidiki’s most beautiful coastline today.
            </p>

            {/* Styled Icon List */}
            <div className="flex flex-col gap-5 mt-2">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8c6239] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[15px] text-gray-900 font-bold tracking-wide">
                      {item.title}
                    </span>
                    <span className="font-sans text-[14px] text-gray-700 font-normal leading-relaxed mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right Column: Asymmetric Double-Image Showcase */}
          <div className="lg:col-span-6 flex items-center gap-6 relative w-full justify-center">

            {/* Left Image Card: Balcony view */}
            <div className="relative w-[45%] h-[320px] md:h-[380px] rounded-[2rem] mt-16 flex-shrink-0">
              {/* Sunburst vector behind Left Image top right */}
              <div className="absolute -top-12 -right-8 pointer-events-none z-0">
                <svg className="w-24 h-24 text-[#e2d4be]/85" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
                </svg>
              </div>
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-white/30 relative z-10 group">
                <img
                  src={aboutImg}
                  alt="Villa Magnifica Balcony View"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Image Card: Exterior Pool view */}
            <div className="w-[50%] h-[420px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-white/30 relative z-20 group">
              <img
                src={heroImg}
                alt="Villa Magnifica Exterior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
