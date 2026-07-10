import React from 'react';

import f1 from '../../assets/Featured/f1.jpg';
import f2 from '../../assets/Featured/f2.jpg';
import f3 from '../../assets/Featured/f3.jpg';
import f4 from '../../assets/Featured/f4.jpg';
import f5 from '../../assets/Featured/f5.jpg';
import f6 from '../../assets/Featured/f6.jpg';
import f7 from '../../assets/Featured/f7.jpg';
import f8 from '../../assets/Featured/f8.jpg';

const logos = [
  { src: f1, alt: 'ETHNOS' },
  { src: f2, alt: 'Naftemporiki.gr' },
  { src: f3, alt: 'Elefterotipia' },
  { src: f4, alt: 'I Efimerida ton Syntakton' },
  { src: f5, alt: 'To Vima' },
  { src: f6, alt: 'Ta Nea' },
  { src: f7, alt: 'Proto Thema' },
  { src: f8, alt: 'Kathimerini' },
];

export default function FeaturedIn() {
  return (
    <section
      id="featured-in"
      className="py-20 md:py-24 bg-[#f5efe4] scroll-mt-20 overflow-hidden relative"
    >
      {/* Decorative sunburst — top right */}
      <div className="absolute top-[8%] right-[4%] pointer-events-none z-0 opacity-20">
        <svg className="w-32 h-32 text-[#e2d4be]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
        </svg>
      </div>

      {/* Decorative sparkle — bottom left */}
      <div className="absolute bottom-[5%] left-[3%] pointer-events-none z-0 opacity-25">
        <svg className="w-44 h-44 text-gray-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header Block — matches site tagline + heading style ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">

          {/* Tagline */}
          <span className="text-xs md:text-sm font-sans font-bold text-[#8c6239] tracking-widest uppercase relative pl-6 flex items-center gap-2 self-center">
            <span className="absolute left-0 w-4 h-[1.5px] bg-[#8c6239]" />
            As Seen In
          </span>

          {/* Main Heading */}
          <h2 className="font-sans text-3xl md:text-[3.6vw] lg:text-[4.2vw] font-medium uppercase leading-[1.05] tracking-normal text-gray-900">
            Featured In Leading Greek Press
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 font-sans text-sm md:text-[15px] leading-relaxed max-w-lg font-normal">
            Discover trusted media names that highlight Greece's culture, travel,
            and holiday appeal, helping guests feel confident before booking online today.
          </p>
        </div>

        {/* ── Infinite Marquee Strip ── */}
        {/*
          We render logos twice side-by-side so the strip loops seamlessly.
          The animation translates from 0 to -50% (the first copy),
          then snaps back to 0 — invisible because the second copy is identical.
        */}
        <div className="relative w-full overflow-hidden">
          {/* Fade masks on left and right edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f5efe4] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f5efe4] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* First copy */}
            {logos.map((logo, idx) => (
              <div
                key={`a-${idx}`}
                className="flex items-center justify-center flex-shrink-0 px-10 md:px-14 py-4 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-400"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Second copy — creates seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`b-${idx}`}
                className="flex items-center justify-center flex-shrink-0 px-10 md:px-14 py-4 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-400"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
