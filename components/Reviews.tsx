import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
            ))}
          </div>
          <p className="text-stone-400">4.9 Star Rating on Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-black/40 p-8 border border-stone-800 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-stone-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-stone-800 pt-4">
                <span className="font-heading font-bold text-white uppercase tracking-wider text-sm">
                  {review.name}
                </span>
                <span className="text-xs text-stone-500">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;