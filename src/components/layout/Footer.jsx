import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // SVG WhatsApp Icon
  const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.075-1.33a9.935 9.935 0 004.93 1.312h.005c5.505 0 9.988-4.479 9.99-9.986a9.98 9.98 0 00-9.988-9.996zm6.182 14.155c-.27.763-1.376 1.405-1.9 1.458-.523.053-1.036.27-3.356-.69-2.798-1.155-4.57-3.99-4.71-4.177-.14-.187-1.127-1.5-1.127-2.862 0-1.36.71-2.03.963-2.302.253-.27.553-.338.738-.338.184 0 .37.002.53.01.17.008.397-.064.622.48.232.56.793 1.93.86 2.062.068.136.113.294.023.477-.09.183-.136.297-.272.457-.136.16-.285.357-.408.48-.136.135-.278.283-.12.553.158.27.7 1.15 1.5 1.862.8.712 1.474.932 1.745 1.068.27.135.428.113.585-.068.158-.183.676-.788.857-1.058.18-.27.362-.225.61-.135.25.09 1.583.743 1.854.88.27.134.45.2.518.315.068.113.068.653-.203 1.417z" />
    </svg>
  );

  // SVG Viber Icon (Simplified Speech Bubble with Phone)
  const ViberIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.37 14.16a2.64 2.64 0 00-.77-.38c-.37-.12-.76-.23-1.13-.3a3.52 3.52 0 00-1.4.15 2 2 0 00-.91.56 1.7 1.7 0 01-.6.38 4.7 4.7 0 01-1.78-.34 8.76 8.76 0 01-2.33-1.57 9.07 9.07 0 01-1.63-2.33 4.89 4.89 0 01-.35-1.8 1.63 1.63 0 01.37-.58 2.08 2.08 0 00.56-.91 3.52 3.52 0 00.15-1.4c-.07-.37-.18-.76-.3-1.13a2.64 2.64 0 00-.38-.77C8.56 3.2 8.04 3 7.37 3c-.76 0-1.52.28-2.07.82A4.2 4.2 0 004.14 7c0 2.22.68 4.3 1.95 6.07a14.7 14.7 0 004.83 4.83A11.13 11.13 0 0017 19.86a4.2 4.2 0 003.18-1.16c.54-.55.82-1.31.82-2.07a2.82 2.82 0 00-.63-2.47zM20 7.5A4.5 4.5 0 0015.5 3v1.5A3 3 0 0118.5 7.5H20zm2.5 0A7 7 0 0015.5 .5v1.5a5.5 5.5 0 015.5 5.5H22.5z" />
    </svg>
  );

  // SVG Facebook Icon
  const FacebookIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );

  return (
    <footer className="bg-bg-dark text-white pt-16 pb-8 border-t border-white/5 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5 items-start">
            <img src={logoImg} alt="Villa Magnifica Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Experience the absolute pinnacle of Greek luxury. Nestled in the serene cliffs of Palluri, Halkidiki, Villa Magnifica offers breathtaking sea views, private infinity pools, and five-star bespoke hospitality.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4.5 h-4.5 fill-current stroke-none" />
              </a>
              <a
                href="https://wa.me/97152831256"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-green transition-all duration-300 hover:scale-105"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-primary">Quick Links</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                  <span className="w-1.5 h-[1.5px] bg-primary scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
                  Home
                </a>
              </li>
              <li>
                <a href="#villa" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                  <span className="w-1.5 h-[1.5px] bg-primary scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
                  The Villa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                  <span className="w-1.5 h-[1.5px] bg-primary scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                  <span className="w-1.5 h-[1.5px] bg-primary scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group">
                  <span className="w-1.5 h-[1.5px] bg-primary scale-0 group-hover:scale-100 transition-transform duration-200 origin-left" />
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-primary">Get In Touch</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Palluri, Kassandra, Halkidiki, Greece</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:info@villamagnificapalluri.com" className="hover:text-primary transition-colors">
                    info@villamagnificapalluri.com
                  </a>
                  <a href="mailto:villamagnificahalkidiki@gmail.com" className="hover:text-primary transition-colors">
                    villamagnificahalkidiki@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+38970322955" className="hover:text-primary transition-colors">
                  +389 70 322 955
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-accent-green flex-shrink-0" />
                <a href="https://wa.me/97152831256" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +971 52 283 1256
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ViberIcon className="w-5 h-5 text-accent-viber flex-shrink-0" />
                <a href="viber://contact?number=%2B38970322955" className="hover:text-primary transition-colors">
                  Viber: +389 70 322 955
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-primary">Newsletter</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to receive exclusive offers, local events, and travel inspiration directly from Halkidiki.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch mt-1">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-l px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover px-4 rounded-r transition-colors duration-200 flex items-center justify-center text-white"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <div>
            &copy; {currentYear} <span className="text-gray-400">Villa Magnifica Palluri</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

