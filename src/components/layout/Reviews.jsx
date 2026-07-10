import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    title: 'A Perfect Escape',
    quote:
      '"Villa Magnifica exceeded our expectations with privacy, stunning sea views, and a beautiful infinity pool. Everything was spotless, peaceful, and perfectly located for beach days and sunset evenings every time."',
    name: 'Emily Carter',
    visited: 'June 2025',
    rating: 5,
  },
  {
    title: 'Truly Luxurious Stay',
    quote:
      '"We loved the elegant design, spacious bedrooms, and incredible outdoor dining area. The villa felt luxurious yet welcoming, and the nearby beaches made it the perfect family holiday choice overall."',
    name: 'Daniel Moore',
    visited: 'March 2026',
    rating: 5,
  },
  {
    title: 'Best Holiday Experience',
    quote:
      '"From arrival to departure, every detail felt thoughtfully prepared. The villa offered comfort, privacy, and unforgettable views, while the quiet surroundings helped us relax completely and enjoy our holiday."',
    name: 'Sophie Bennett',
    visited: 'September 2025',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-14 md:py-8 bg-[#f5efe4] select-none scroll-mt-20 overflow-hidden relative"
    >
      {/* Decorative background sparkle top-right */}
      <div className="absolute top-[6%] right-[4%] pointer-events-none z-0 opacity-25">
        <svg
          className="w-36 h-36 text-gray-300"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
        </svg>
      </div>

      {/* Decorative sunburst bottom-left */}
      <div className="absolute bottom-[6%] left-[3%] pointer-events-none z-0 opacity-20">
        <svg className="w-28 h-28 text-[#e2d4be]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 L52 35 L68 22 L58 40 L82 34 L62 48 L88 60 L62 54 L75 78 L58 58 L62 82 L52 58 L50 85 L48 58 L38 82 L42 58 L25 78 L38 54 L12 60 L38 48 L18 34 L42 40 L32 22 L48 35 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Centered Header Block ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">

          {/* Pill Badge */}
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#8c6239]/10 border border-[#8c6239]/20 text-[#8c6239] text-xs font-sans font-bold tracking-widest uppercase">
            Guest Stories
          </span>

          {/* Main Heading */}
          <h2 className="font-sans text-3xl md:text-[3.6vw] lg:text-[4.2vw] font-medium uppercase leading-[1.05] tracking-normal text-gray-900">
            Loved by Guests
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 font-sans text-sm md:text-[15px] leading-relaxed max-w-xl font-normal">
            Hear from our visitors about their unforgettable stays, showcasing the comfort,
            privacy, and breathtaking views that define our luxury villa.
          </p>
        </div>

        {/* ── 3-Column Review Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white/60 backdrop-blur-md border border-white/70 rounded-[2.5rem] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Card Top: Title + Stars + Quote */}
              <div className="flex flex-col items-center text-center gap-4">

                {/* Review Title */}
                <h3 className="font-sans text-xl font-bold text-[#8c6239] tracking-wide leading-tight">
                  {review.title}
                </h3>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 font-sans text-sm md:text-[14.5px] leading-relaxed italic font-normal">
                  {review.quote}
                </p>
              </div>

              {/* Card Bottom: Signature */}
              <div className="mt-6 pt-5 border-t border-gray-200/60 text-center">
                <p className="font-sans font-bold text-gray-900 text-[14px] tracking-wide">
                  {review.name}{' '}
                  <span className="text-gray-500 font-normal">— Visited: {review.visited}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
