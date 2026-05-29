import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Large Plant */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto opacity-30 pointer-events-none z-0">
        <img 
          src="/images/hero_bg.png" 
          alt="Lush Plant Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            Earth's <br />
            <span className="text-accent-light">Exhale</span>
          </h1>
          <p className="text-text-muted text-lg max-w-md">
            Bring life back into your home. Our carefully curated plants don't just decorate; they breathe, heal, and connect you to the rhythms of nature.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-accent-color text-primary-bg px-8 py-4 rounded-full font-bold text-lg hover:scale-105 shadow-lg shadow-accent-color/20">
              Buy Now
            </button>
            <button className="flex items-center gap-3 font-semibold text-white hover:text-accent-light">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <PlayIcon className="w-6 h-6" />
              </div>
              See Trailer
            </button>
          </div>

          {/* Mini Testimonial */}
          <div className="glass p-6 max-w-sm mt-12 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-color">
              <img src="/images/c1.png" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex text-accent-color text-sm">★★★★★</div>
              <p className="text-sm italic text-text-main">"My home feels alive now. The best quality I've ever seen."</p>
              <p className="text-xs font-bold text-accent-light mt-1">- Sarah J.</p>
            </div>
          </div>
        </div>

        {/* Center/Right Featured Plant */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-light/10 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-all duration-700"></div>
            <img 
              src="/images/human_care.png" 
              alt="Aglaonema Plant Care" 
              className="relative w-full max-w-[500px] h-auto rounded-[40px] shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
            />
            
            {/* Overlay Info Card */}
            <div className="absolute -bottom-10 -left-10 glass p-6 z-20 animate-fade-in delay-300">
              <h3 className="text-xl font-bold">Aglaonema plant</h3>
              <p className="text-accent-light font-bold text-2xl mt-1">Rs. 800/-</p>
              <button className="mt-4 bg-white text-primary-bg px-6 py-2 rounded-xl font-bold text-sm hover:bg-accent-light transition-colors">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
