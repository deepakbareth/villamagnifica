import React, { useState, useEffect } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to stick navbar cleanly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Villa', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Experiences', href: '#' },
    { label: 'Nearby Beaches', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200/40  ${scrolled ? 'bg-[#f5efe4]/75 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent py-1'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Left Side: Logo */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <img
            src={logoImg}
            alt="Villa Magnifica Logo"
            className="h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center Side: Spaced Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`font-sans text-[14px] font-medium tracking-wide transition-all duration-200 px-4 py-1.5 ${link.active
                ? 'border border-gray-900 text-gray-900 rounded-full font-semibold'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: STAYGO Orange CTA Button & Bell Icon */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-sans text-[14px] font-bold tracking-wide rounded-full transition-all duration-300 shadow-sm"
          >
            Contact Us
          </a>


        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-[#f97316] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER SIDE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[300px] h-full bg-[#f5efe4] shadow-2xl flex flex-col justify-between py-8 px-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-6 border-b border-gray-200/50">
            <img src={logoImg} alt="Villa Magnifica Logo" className="h-10 w-auto object-contain" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-800 hover:text-[#f97316] transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-5 my-8 overflow-y-auto pr-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-lg font-semibold tracking-wide py-1.5 px-3 rounded-lg transition-colors duration-200 ${link.active
                  ? 'bg-[#f97316] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="border-t border-gray-200/50 pt-6 mt-auto">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 bg-[#f97316] text-white font-sans text-sm font-bold tracking-wide rounded-full hover:bg-[#ea580c] transition-colors shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


