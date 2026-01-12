import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-amber-600 font-bold uppercase tracking-widest mb-2 text-sm">
            Our Menu
          </h4>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">
            Services & Pricing
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative p-6 border border-stone-800 hover:border-amber-600/50 bg-stone-900/50 transition-colors duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <span className="font-heading text-xl font-bold text-amber-500">
                  {service.price}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-stone-400 text-sm max-w-[80%]">
                  {service.description}
                </p>
                <span className="text-xs text-stone-500 font-mono">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={BUSINESS_INFO.bookingUrl}
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-amber-500 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all cursor-default opacity-90"
          >
            Check Availability
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;