import React from 'react';

const BestO2 = () => {
  return (
    <section className="py-24 bg-white/5 overflow-hidden">
      <div className="container">
        <div className="glass p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light/10 blur-[100px]"></div>
          
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-accent-color/20 blur-3xl rounded-full"></div>
             <img 
               src="/images/hero_bg.png" 
               alt="Large Lush Plant" 
               className="relative w-full h-auto rounded-3xl shadow-2xl z-10"
             />
          </div>

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Best <span className="text-accent-light">O2</span> <br />
              Plants Collections
            </h2>
            <p className="text-text-muted text-lg">
              Oxygen-producing plants are nature's air purifiers. Beyond beauty, they actively filter toxins and release fresh oxygen, creating a healthier, more vibrant living environment for you and your family.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                <p className="text-text-main font-medium">Naturally filters indoor air pollutants</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                <p className="text-text-main font-medium">Boosts mood and reduces stress levels</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                <p className="text-text-main font-medium">Enhances focus and productivity in workspaces</p>
              </div>
            </div>
            <button className="bg-white text-primary-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-light hover:scale-105 transition-all">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2;
