import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { NAVIGATION, BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === 'javascript:void(0)' || href === '#' || href === BUSINESS_INFO.bookingUrl) return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
        // Close mobile menu if open
        setIsOpen(false);
        
        // Calculate position with offset for fixed header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-neutral-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 group">
          <div className="bg-amber-600 p-2 rounded-sm group-hover:bg-amber-500 transition-colors">
            <Scissors className="text-black h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-white uppercase leading-none">
              London Gents
            </span>
            <span className="text-[10px] text-amber-500 tracking-[0.2em] uppercase leading-none">
              Barbers
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-stone-300 hover:text-amber-500 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS_INFO.bookingUrl}
            onClick={(e) => e.preventDefault()}
            className="bg-amber-600 hover:bg-amber-500 text-black px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-all transform hover:-translate-y-0.5 cursor-default opacity-90"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-8 w-8 text-amber-500" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed inset-0 bg-neutral-900/98 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAVIGATION.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-2xl font-heading font-bold text-white hover:text-amber-500 uppercase tracking-widest"
          >
            {item.label}
          </a>
        ))}
        <a
          href={BUSINESS_INFO.bookingUrl}
          onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
          className="mt-4 bg-amber-600 text-black px-8 py-4 font-bold uppercase tracking-wider text-lg cursor-default opacity-90"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;