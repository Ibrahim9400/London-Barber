import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO, OPENING_HOURS } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-black border border-stone-800">
          
          {/* Info Side */}
          <div className="flex-1 p-10 lg:p-16">
            <h2 className="font-heading text-3xl font-bold text-white uppercase mb-8">
              Visit Us
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-amber-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider mb-1">Address</h3>
                  <p className="text-stone-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-amber-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-stone-400">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-amber-500 mt-1 shrink-0" />
                <div className="w-full">
                  <h3 className="font-bold text-white uppercase tracking-wider mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    {OPENING_HOURS.map((oh) => (
                      <div key={oh.day} className="flex justify-between text-stone-400 border-b border-stone-800 pb-2 last:border-0">
                        <span>{oh.day}</span>
                        <span className="text-white">{oh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="flex-1 min-h-[400px] lg:min-h-full bg-stone-800 relative">
             <iframe
                src={BUSINESS_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;