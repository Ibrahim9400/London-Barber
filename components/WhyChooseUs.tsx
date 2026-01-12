import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { Star, Scissors, Coffee, Award } from 'lucide-react';

const icons = [Star, Scissors, Coffee, Award];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-amber-600/30 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-800 text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-black transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;