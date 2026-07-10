import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import poolImg from '../../assets/hero2.jpg';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-8 md:py-8 overflow-hidden "
    >
      {/* ── Background Image with blur overlay ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${poolImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) brightness(0.45)',
          transform: 'scale(1.05)', // prevent blur edge artifacts
        }}
      />

      {/* ── Dark tint overlay for contrast ── */}
      <div className="absolute inset-0 z-0 bg-[#0f1523]/55" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-6">

          {/* Tagline */}


          {/* Heading */}
          <h2 className="font-sans text-3xl md:text-[3.6vw] lg:text-[4.2vw] font-medium uppercase leading-[1.05] tracking-normal text-white">
            Join Our Exclusive Community
          </h2>

          {/* Description */}
          <p className="text-white/70 font-sans text-sm md:text-[15px] leading-relaxed font-normal max-w-md">
            Stay updated with seasonal offers and local Halkidiki travel tips
            by subscribing to our newsletter for luxury villa news today.
          </p>

          {/* Email Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex items-stretch w-full max-w-md mt-2 rounded-full overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-transparent px-6 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-bold font-sans tracking-wide transition-colors duration-300 flex-shrink-0"
              >
                Sign Up
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="mt-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-sans text-sm font-semibold tracking-wide">
              🎉 You're in! Welcome to the Villa Magnifica community.
            </div>
          )}

          {/* Privacy note */}
          <p className="text-white/40 font-sans text-xs mt-1">
            No spam, ever. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
}
