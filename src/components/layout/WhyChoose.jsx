import React, { useState } from 'react';
import { Home, Compass, Waves, MapPin, Sparkles, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import aboutImg from '../../assets/choos3.jpg';
import poolImg from '../../assets/choos2.jpg';
import locationImg from '../../assets/location.jpg';
import comfortImg from '../../assets/choos1.jpg';

export default function WhyChoose() {
  const cards = [
    {
      title: 'Private Escape',
      icon: Home,
      img: heroImg,
      desc: 'Enjoy complete privacy in a peaceful setting, perfect for families, couples, and small groups together.',
    },
    {
      title: 'Sea Views',
      icon: Compass,
      img: aboutImg,
      desc: 'Wake up to panoramic Aegean views, creating unforgettable mornings and relaxing evenings above the coast.',
    },
    {
      title: 'Infinity Pool',
      icon: Waves,
      img: poolImg,
      desc: 'Relax beside your private infinity pool, where sunbeds, sunsets, and cool water define leisure daily.',
    },
    {
      title: 'Top Location',
      icon: MapPin,
      img: locationImg,
      desc: 'Stay moments from beautiful beaches, lively beach bars, restaurants, and essential shops close by too.',
    },
    {
      title: 'Modern Comfort',
      icon: Sparkles,
      img: comfortImg,
      desc: 'Enjoy elegant interiors, a fully equipped kitchen, private elevator, and spacious rooms designed for comfort.',
    },
    {
      title: 'Ideal Choice',
      icon: Heart,
      img: aboutImg,
      desc: 'Perfect for memorable holidays, Villa Magnifica offers luxury, privacy, convenience, and effortless relaxation for everyone.',
    },
  ];

  // State to track the center card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for sliding
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Calculate indices for left and right cards
  const leftIndex = (currentIndex - 1 + cards.length) % cards.length;
  const rightIndex = (currentIndex + 1) % cards.length;

  return (
    <section id="why-choose" className="py-12 bg-[#f5efe4] select-none scroll-mt-20 overflow-hidden">

      {/* Brown Rounded Container — constrained to same max-w-7xl as all other sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#874b35] rounded-[2.5rem] py-10 px-6 md:px-12 relative shadow-2xl overflow-hidden">

          {/* Centered Header Block */}
          <div className="mb-5 flex flex-col text-center">
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug tracking-wide text-white">
              Why Choose Villa Magnifica
            </h2>
          </div>

          {/* Custom Slider Container */}
          <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[450px]">

            {/* LEFT CARD (Image Only, Scaled Down) */}
            <div
              onClick={prevSlide}
              className="hidden md:block w-1/4 lg:w-1/3 scale-90 opacity-60 hover:opacity-100 transition-all duration-500 rounded-[2rem] border-2 border-white/50 overflow-hidden aspect-[4/3] cursor-pointer shadow-lg"
            >
              <img
                src={cards[leftIndex].img}
                alt="Previous Slide"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CENTER CARD (Full UI) */}
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-[1.5rem] p-4 flex flex-col shadow-2xl z-10 scale-100 transition-all duration-500">

              {/* Card Header (Avatar + Title + Ellipsis) */}
              <div className="flex items-center justify-between mb-3 pl-1 pr-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fcf9f2] flex items-center justify-center shadow-inner shrink-0 text-[#874b35]">
                    {React.createElement(cards[currentIndex].icon, { className: "w-4 h-4" })}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-sans font-bold text-gray-900 text-[14px] leading-tight">
                      {cards[currentIndex].title}
                    </h3>
                  </div>
                </div>

              </div>

              {/* Card Image */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 relative bg-gray-100 group">
                <img
                  src={cards[currentIndex].img}
                  alt={cards[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Description */}
              <div className="px-1 pb-2">
                <p className="text-gray-800 font-sans text-[13px] md:text-[14px] leading-relaxed">

                  {cards[currentIndex].desc}
                </p>
              </div>

            </div>

            {/* RIGHT CARD (Image Only, Scaled Down) */}
            <div
              onClick={nextSlide}
              className="hidden md:block w-1/4 lg:w-1/3 scale-90 opacity-60 hover:opacity-100 transition-all duration-500 rounded-[2rem] border-2 border-white/50 overflow-hidden aspect-[4/3] cursor-pointer shadow-lg"
            >
              <img
                src={cards[rightIndex].img}
                alt="Next Slide"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Bottom Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between w-full max-w-4xl mx-auto px-2">
            <button
              onClick={prevSlide}
              className="px-6 py-2 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-8 py-2 rounded-full bg-[#f97316] text-white text-sm font-medium hover:bg-[#ea580c] transition-colors shadow-lg flex items-center gap-1.5"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}