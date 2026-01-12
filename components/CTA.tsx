import React from 'react';
import { BUSINESS_INFO } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
       {/* Background Image */}
       <div className="absolute inset-0 opacity-20">
         <img src="https://picsum.photos/1920/600?grayscale&blur=2" alt="Background" className="w-full h-full object-cover" />
       </div>
       
       <div className="relative z-10 container mx-auto px-6 text-center">
         <h2 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase mb-8">
           Ready for a Fresh Cut?
         </h2>
         <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
           Walk-ins are welcome, but appointments are recommended to secure your preferred time and barber.
         </p>
         
         <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
            href={BUSINESS_INFO.bookingUrl}
            onClick={(e) => e.preventDefault()}
            className="bg-amber-600 hover:bg-amber-500 text-black px-10 py-5 font-bold uppercase tracking-wider text-base transition-all transform hover:-translate-y-1 shadow-lg cursor-default opacity-90"
          >
            Book Your Appointment
          </a>
           <div className="flex items-center justify-center px-10 py-5 border border-stone-700 bg-black/50 backdrop-blur-sm text-stone-300 font-bold uppercase tracking-wider text-base">
             Walk-ins Welcome
           </div>
         </div>
       </div>
    </section>
  );
};

export default CTA;