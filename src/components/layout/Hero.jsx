import React from 'react';
import heroImg from '../../assets/hero.png';
import aboutImg from '../../assets/about.jpg';

export default function Hero() {
  const handleExploreClick = () => {
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#f5efe4] pt-24 pb-16 md:pb-24 overflow-hidden select-none flex items-center">

      {/* 1. Multi-color Radial Blur Background behind the main title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[250px] md:h-[450px] bg-gradient-to-tr from-[#38bdf8]/15 via-[#fdba74]/15 to-transparent rounded-full filter blur-[80px] pointer-events-none z-0" />

      {/* Decorative Vectors matching STAYGO */}
      {/* Top Left: Light Blue Star */}
      <div className="absolute top-28 left-[10%] md:left-[15%] pointer-events-none z-0 animate-[pulse_4s_infinite]">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-[#cbe3f7]/60" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L54 38 L82 24 L64 46 L90 50 L64 54 L82 76 L54 62 L50 90 L46 62 L18 76 L36 54 L10 50 L36 46 L18 24 L46 38 Z" />
        </svg>
      </div>

      {/* Bottom Center: Outline Diamond Star */}
      <div className="absolute bottom-[10%] left-[45%] pointer-events-none z-0 hidden md:block">
        <svg className="w-20 h-20 text-gray-400/50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      {/* Bottom Right: Gold Sunburst */}
      <div className="absolute bottom-12 right-[8%] pointer-events-none z-0">
        <svg className="w-24 h-24 md:w-28 md:h-28 text-[#e2d4be]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
        </svg>
      </div>

      {/* Main Layout Container */}
      {/* 1. Desktop version - visible only on large screens */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
        
        {/* Subtitle */}
        <div className="text-center font-sans text-xs md:text-sm font-semibold tracking-[0.15em] text-gray-800 uppercase mb-4">
          Luxury . Privacy . Perfection
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative mt-6">

          {/* LEFT SIDE (cols 1 to 4): Text & Image Card 1 */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            {/* Top-Left Subtext */}
            <p className="text-gray-800 font-sans text-sm md:text-[15px] leading-relaxed max-w-xs text-left">
              Book Your Perfect Stay With Ease. Our Hotel Booking Platform Lets You Compare Prices, Explore Real Guest Reviews, And Find Exclusive Deals On Hotels.
            </p>

            {/* Left Image Card: Balcony view */}
            <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-white/30 aspect-[3/4] max-w-[280px] lg:max-w-none mx-auto w-full group">
              <img
                src={aboutImg}
                alt="Villa Magnifica Balcony View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* CENTER SIDE (cols 5 to 8): Giant Titles & Action */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 order-1 lg:order-2">

            {/* Large Center Title overlapping - layered above images using relative z-30 */}
            <h1 className="text-center font-serif text-[11vw] md:text-[7vw] lg:text-[9.5vw] font-light uppercase leading-[0.9] tracking-[0.01em] text-gray-900 mb-8 whitespace-nowrap relative z-30">
              VILLA <br />
              <span className='text-gray-800'>MAGNIFICA</span>
            </h1>

            {/* Explore Button Container */}
            <button
              onClick={handleExploreClick}
              className="px-10 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-sans text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 z-20"
            >
              Explore
            </button>
          </div>

          {/* RIGHT SIDE (cols 9 to 12): Image Card 2 & Text */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-3 lg:order-3 lg:-translate-y-8">
            {/* Right Image Card: Exterior view */}
            <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-white/30 aspect-[3/4] max-w-[280px] lg:max-w-none mx-auto w-full group">
              <img
                src={heroImg}
                alt="Villa Magnifica Exterior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom-Right Subtext */}
            <p className="text-gray-800 font-sans text-sm md:text-[15px] leading-relaxed max-w-xs text-left lg:self-end">
              Find Your Next Stay In Just A Few Clicks! Discover Hotels That Match Your Style And Budget — From Luxury Resorts To Cozy Rooms.
            </p>
          </div>

        </div>

      </div>

      {/* 2. Mobile version - visible only on mobile/tablet screens */}
      <div className="lg:hidden relative z-10 w-full px-4 flex flex-col items-center text-center gap-5 mt-4">
        
        {/* Subtitle */}
        <div className="font-sans text-[11px] font-bold tracking-[0.15em] text-gray-800 uppercase">
          Luxury . Privacy . Perfection
        </div>

        {/* Title: wraps nicely without horizontal scrolling */}
        <h1 className="font-serif text-[11vw] md:text-[8vw] font-light uppercase leading-[1.0] tracking-[0.01em] text-gray-900 flex flex-col gap-1">
          <span>VILLA</span>
          <span className="text-gray-800">MAGNIFICA</span>
        </h1>

        {/* Combined Short Description */}
        <p className="text-gray-800 font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto px-2">
          Book your perfect stay with ease. Discover the ultimate Halkidiki escape in our premium three-bedroom villa, surrounded by pristine sea views and world-class beaches.
        </p>

        {/* Explore Button */}
        <button
          onClick={handleExploreClick}
          className="px-8 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
        >
          Explore
        </button>

        {/* Side-by-Side Asymmetric Images mirroring Staygo */}
        <div className="flex gap-4 w-full max-w-md mx-auto mt-4 items-start px-2">
          <div className="w-1/2 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-white/30 mt-6">
            <img src={aboutImg} alt="Villa Balcony View" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-white/30">
            <img src={heroImg} alt="Villa Pool View" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

    </section>
  );
}
