import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Barber Shop Interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1 border border-amber-500/50 rounded-full bg-black/30 backdrop-blur-sm">
          <span className="text-amber-500 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
            Est. London • Classic Grooming
          </span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tight leading-none">
          London Gents <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-500">
            Barbers
          </span>
        </h1>

        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Precision cuts. Classic grooming. Modern London style. <br/>
          Experience the finest men's grooming in Kennington.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href={BUSINESS_INFO.bookingUrl}
            onClick={(e) => e.preventDefault()}
            className="w-full md:w-auto bg-amber-600 hover:bg-amber-500 text-black min-w-[180px] px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] cursor-default opacity-90"
          >
            Book Online
          </a>
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="w-full md:w-auto bg-transparent border border-white/20 hover:border-amber-500 hover:text-amber-500 text-white min-w-[180px] px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;