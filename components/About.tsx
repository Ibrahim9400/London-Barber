import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h4 className="text-amber-600 font-bold uppercase tracking-widest mb-2 text-sm">
              Who We Are
            </h4>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-bold mb-6 uppercase">
              A Trusted Local <br/> Barber Shop in London
            </h2>
            <div className="w-20 h-1 bg-amber-600 mb-8"></div>
            
            <div className="space-y-6 text-stone-300 leading-relaxed text-lg">
              <p>
                At London Gents Barbers, we believe a haircut is more than just a routine—it's a craft. 
                Our shop combines the nostalgic charm of traditional barbering with the sharp, modern 
                techniques of today's London style.
              </p>
              <p>
                Our team of friendly, professional barbers is dedicated to providing high-quality cuts 
                at accessible prices. Whether you're after a classic scissor cut, a razor-sharp skin fade, 
                or a relaxing hot towel shave, we pay attention to every detail.
              </p>
              <p>
                Step into our shop for a relaxed yet professional atmosphere where we understand 
                exactly what you need. We aren't just cutting hair; we're building confidence.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="text-center">
                <span className="block font-heading text-4xl font-bold text-white">4.9</span>
                <span className="text-xs text-amber-500 uppercase tracking-widest">Google Rating</span>
              </div>
              <div className="h-10 w-px bg-stone-700"></div>
              <div className="text-center">
                <span className="block font-heading text-4xl font-bold text-white">480+</span>
                <span className="text-xs text-amber-500 uppercase tracking-widest">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-amber-600/30 z-0 translate-x-4 translate-y-4 hidden md:block"></div>
              <img 
                src="https://picsum.photos/600/700?grayscale" 
                alt="Barber working on client" 
                className="relative z-10 w-full h-[500px] object-cover grayscale contrast-125 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;