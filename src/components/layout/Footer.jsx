import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import FooterLogo from '../../assets/pbw.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ── SVG Icons ──────────────────────────────────────────────────────────────

  const WhatsAppIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.075-1.33a9.935 9.935 0 004.93 1.312h.005c5.505 0 9.988-4.479 9.99-9.986a9.98 9.98 0 00-9.988-9.996zm6.182 14.155c-.27.763-1.376 1.405-1.9 1.458-.523.053-1.036.27-3.356-.69-2.798-1.155-4.57-3.99-4.71-4.177-.14-.187-1.127-1.5-1.127-2.862 0-1.36.71-2.03.963-2.302.253-.27.553-.338.738-.338.184 0 .37.002.53.01.17.008.397-.064.622.48.232.56.793 1.93.86 2.062.068.136.113.294.023.477-.09.183-.136.297-.272.457-.136.16-.285.357-.408.48-.136.135-.278.283-.12.553.158.27.7 1.15 1.5 1.862.8.712 1.474.932 1.745 1.068.27.135.428.113.585-.068.158-.183.676-.788.857-1.058.18-.27.362-.225.61-.135.25.09 1.583.743 1.854.88.27.134.45.2.518.315.068.113.068.653-.203 1.417z" />
    </svg>
  );

  const FacebookIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );

  const ViberIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.37 14.16a2.64 2.64 0 00-.77-.38c-.37-.12-.76-.23-1.13-.3a3.52 3.52 0 00-1.4.15 2 2 0 00-.91.56 1.7 1.7 0 01-.6.38 4.7 4.7 0 01-1.78-.34 8.76 8.76 0 01-2.33-1.57 9.07 9.07 0 01-1.63-2.33 4.89 4.89 0 01-.35-1.8 1.63 1.63 0 01.37-.58 2.08 2.08 0 00.56-.91 3.52 3.52 0 00.15-1.4c-.07-.37-.18-.76-.3-1.13a2.64 2.64 0 00-.38-.77C8.56 3.2 8.04 3 7.37 3c-.76 0-1.52.28-2.07.82A4.2 4.2 0 004.14 7c0 2.22.68 4.3 1.95 6.07a14.7 14.7 0 004.83 4.83A11.13 11.13 0 0017 19.86a4.2 4.2 0 003.18-1.16c.54-.55.82-1.31.82-2.07a2.82 2.82 0 00-.63-2.47z" />
    </svg>
  );

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Villa', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Experiences', href: '#' },
    { label: 'Nearby Beaches', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: <FacebookIcon className="w-4 h-4" />,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/97152831256',
      icon: <WhatsAppIcon className="w-4 h-4" />,
    },
    {
      label: 'Viber',
      href: 'viber://contact?number=%2B38970322955',
      icon: <ViberIcon className="w-4 h-4" />,
    },
  ];

  return (
    <footer
      className="relative overflow-hidden select-none font-sans"
      style={{ background: 'linear-gradient(160deg, #f5efe4 0%, #ede3d2 60%, #e6d9c4 100%)' }}
    >

      {/* ── Decorative Coastal/Villa Silhouette Backdrop ── */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden opacity-[0.07]">
        <svg viewBox="0 0 1440 320" className="w-full" fill="currentColor" style={{ color: '#8c6239' }}>
          {/* Left villa block */}
          <rect x="20" y="120" width="120" height="200" rx="4" />
          <rect x="55" y="80" width="50" height="80" rx="2" />
          <rect x="30" y="150" width="20" height="30" rx="2" fill="white" opacity="0.6" />
          <rect x="60" y="150" width="20" height="30" rx="2" fill="white" opacity="0.6" />
          <rect x="90" y="150" width="20" height="30" rx="2" fill="white" opacity="0.6" />
          {/* Center arch villa */}
          <rect x="200" y="90" width="180" height="230" rx="6" />
          <ellipse cx="290" cy="90" rx="90" ry="35" />
          <rect x="240" y="150" width="30" height="50" rx="3" fill="white" opacity="0.5" />
          <rect x="300" y="150" width="30" height="50" rx="3" fill="white" opacity="0.5" />
          <rect x="262" y="220" width="55" height="100" rx="3" />
          {/* Trees */}
          <ellipse cx="430" cy="170" rx="30" ry="50" />
          <rect x="425" y="220" width="10" height="100" />
          <ellipse cx="480" cy="190" rx="22" ry="38" />
          <rect x="475" y="225" width="8" height="95" />
          {/* Right tower block */}
          <rect x="560" y="60" width="100" height="260" rx="4" />
          <rect x="575" y="80" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="615" y="80" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="575" y="130" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="615" y="130" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="575" y="180" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="615" y="180" width="25" height="35" rx="2" fill="white" opacity="0.5" />
          {/* Far right villas */}
          <rect x="720" y="140" width="140" height="180" rx="4" />
          <rect x="755" y="100" width="70" height="80" rx="3" />
          <ellipse cx="790" cy="100" rx="35" ry="20" />
          <rect x="740" y="170" width="25" height="40" rx="2" fill="white" opacity="0.5" />
          <rect x="780" y="170" width="25" height="40" rx="2" fill="white" opacity="0.5" />
          <rect x="820" y="170" width="25" height="40" rx="2" fill="white" opacity="0.5" />
          {/* Extra right structures */}
          <rect x="920" y="100" width="90" height="220" rx="4" />
          <rect x="930" y="115" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <rect x="960" y="115" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <rect x="990" y="115" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <rect x="930" y="165" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <rect x="960" y="165" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <rect x="990" y="165" width="20" height="30" rx="2" fill="white" opacity="0.5" />
          <ellipse cx="1100" cy="200" rx="40" ry="60" />
          <rect x="1094" y="250" width="12" height="70" />
          <ellipse cx="1160" cy="220" rx="28" ry="45" />
          <rect x="1155" y="260" width="10" height="60" />
          <rect x="1230" y="130" width="110" height="190" rx="4" />
          <rect x="1260" y="90" width="50" height="70" rx="3" />
          <ellipse cx="1285" cy="90" rx="28" ry="16" />
          <rect x="1245" y="160" width="22" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="1280" y="160" width="22" height="35" rx="2" fill="white" opacity="0.5" />
          <rect x="1315" y="160" width="22" height="35" rx="2" fill="white" opacity="0.5" />
          {/* Ground line */}
          <rect x="0" y="318" width="1440" height="2" />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 pt-14 pb-0">



        {/* Giant Brand Name + Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-10 px-4 text-center sm:text-left">
          <img
            src={logoImg}
            alt="Villa Magnifica Logo"
            className="h-12 sm:h-14 md:h-20 w-auto object-contain flex-shrink-0"
            style={{ filter: 'sepia(1) saturate(0.6) brightness(0.6)' }}
          />
          <h2
            className="font-serif font-bold leading-none tracking-tight text-[#bfa388] select-none break-words"
            style={{ fontSize: 'clamp(1.8rem, 7vw, 7rem)' }}
          >
            VILLA MAGNIFICA
          </h2>
        </div>

        {/* ── Contact Info Row (3 columns) ── */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* Location */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#8c6239]/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#8c6239]" />
              </div>
              <p className="font-sans text-xs font-bold text-[#8c6239] uppercase tracking-widest">Location</p>
              <p className="font-sans text-sm text-[#5a3e28]/75 leading-relaxed">
                Palluri, Kassandra, Halkidiki, Greece
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#8c6239]/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#8c6239]" />
              </div>
              <p className="font-sans text-xs font-bold text-[#8c6239] uppercase tracking-widest">Email</p>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@villamagnificapalluri.com" className="font-sans text-sm text-[#5a3e28]/75 hover:text-[#8c6239] transition-colors leading-relaxed">
                  info@villamagnificapalluri.com
                </a>
                <a href="mailto:villamagnificahalkidiki@gmail.com" className="font-sans text-sm text-[#5a3e28]/75 hover:text-[#8c6239] transition-colors leading-relaxed">
                  villamagnificahalkidiki@gmail.com
                </a>
              </div>
            </div>

            {/* Phone / WhatsApp / Viber */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#8c6239]/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#8c6239]" />
              </div>
              <p className="font-sans text-xs font-bold text-[#8c6239] uppercase tracking-widest">Contact</p>
              <div className="flex flex-col gap-1">
                <a href="tel:+38970322955" className="font-sans text-sm text-[#5a3e28]/75 hover:text-[#8c6239] transition-colors">
                  +389 70 322 955
                </a>
                <a href="https://wa.me/97152831256" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-[#5a3e28]/75 hover:text-[#8c6239] transition-colors">
                  WhatsApp: +971 52 283 1256
                </a>
                <a href="viber://contact?number=%2B38970322955" className="font-sans text-sm text-[#5a3e28]/75 hover:text-[#8c6239] transition-colors">
                  Viber: +389 70 322 955
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Middle Nav Row ── */}
        <div className="border-t border-[#8c6239]/15 border-b border-[#8c6239]/15 py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">

            {/* Left: Privacy Policy — hidden on mobile, visible on md+ */}
            <a href="#privacy" className="hidden md:block font-sans text-xs md:text-sm text-[#8c6239]/70 hover:text-[#8c6239] transition-colors font-medium tracking-wide">
              Privacy Policy
            </a>

            {/* Center: Nav Links — centered and wrapping on all sizes */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs md:text-sm text-[#5a3e28]/80 hover:text-[#8c6239] transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Terms — hidden on mobile, visible on md+ */}
            <a href="#terms" className="hidden md:block font-sans text-xs md:text-sm text-[#8c6239]/70 hover:text-[#8c6239] transition-colors font-medium tracking-wide">
              Terms &amp; Conditions
            </a>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3 md:gap-4">

            {/* Left: Powered By */}
            <div className="flex items-center gap-2">
              <a
                href="https://premiumbusinesswebsites.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="font-sans text-[11px] text-[#8c6239] font-medium tracking-wide whitespace-nowrap">
                  powered by
                </span>
                <img
                  src={FooterLogo}
                  alt="Powered by logo"
                  className="h-8 w-auto bg-gray-800 rounded object-contain"
                />
              </a>
            </div>

            {/* Center: Copyright */}
            <p className="font-sans text-[11px] text-[#8c6239]/60 text-center">
              © {currentYear} Villa Magnifica Palluri. All Rights Reserved.
            </p>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-[#8c6239]/10 hover:bg-[#8c6239] text-[#8c6239] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
