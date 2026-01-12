import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 group">
              <div className="bg-amber-600 p-2 rounded-sm">
                <Scissors className="text-black h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                London Gents
              </span>
            </div>
            <p className="text-stone-500 max-w-xs mx-auto md:mx-0">
              Classic grooming for the modern gentleman. Precision cuts in the heart of London.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {NAVIGATION.map((item) => (
               <a key={item.label} href={item.href} className="text-stone-400 hover:text-amber-500 uppercase text-xs tracking-widest transition-colors">
                 {item.label}
               </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
             <a href="#" className="h-10 w-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-black transition-all">
               <Instagram className="h-5 w-5" />
             </a>
             <a href="#" className="h-10 w-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-black transition-all">
               <Facebook className="h-5 w-5" />
             </a>
             <a href="#" className="h-10 w-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-black transition-all">
               <Twitter className="h-5 w-5" />
             </a>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 text-xs uppercase tracking-wider">
           <p>&copy; {new Date().getFullYear()} London Gents Barbers. All rights reserved.</p>
           <p className="mt-2 md:mt-0">Designed for Gentlemen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;