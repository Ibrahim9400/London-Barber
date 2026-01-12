import React from 'react';

const images = [
  "https://picsum.photos/500/500?random=1&grayscale",
  "https://picsum.photos/500/500?random=2&grayscale",
  "https://picsum.photos/500/500?random=3&grayscale",
  "https://picsum.photos/500/500?random=4&grayscale",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-0">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((img, idx) => (
          <div key={idx} className="group relative h-64 md:h-80 overflow-hidden cursor-pointer">
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
      <div className="bg-amber-600 py-12 text-center">
         <h3 className="font-heading text-2xl md:text-3xl font-bold text-black uppercase mb-2">
           Follow Us On Instagram
         </h3>
         <p className="text-black/80 font-medium tracking-wide">@LondonGentsBarbers</p>
      </div>
    </section>
  );
};

export default Gallery;