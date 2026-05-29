import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const TrendyPlants = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 underline decoration-accent-color decoration-4 underline-offset-8">
          Our Trendy plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass overflow-hidden group hover:border-accent-light/50 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-8 lg:p-12 space-y-4">
                <h3 className="text-2xl font-bold">For Your Desks Decorations</h3>
                <p className="text-text-muted text-sm">
                  Compact, resilient, and beautifully aesthetic. Perfect for adding a touch of life to your workspace.
                </p>
                <p className="text-xl font-bold text-accent-light">Rs. 500/-</p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-primary-bg px-6 py-2 rounded-lg font-bold hover:bg-accent-light">
                    Explore
                  </button>
                  <button className="p-2 border border-white/20 rounded-lg hover:bg-white/10 text-white">
                    <ShoppingCartIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden">
                <img 
                  src="/images/lifestyle.png" 
                  alt="Desk Plant" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass overflow-hidden group hover:border-accent-light/50 transition-all duration-500">
            <div className="flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2 p-8 lg:p-12 space-y-4">
                <h3 className="text-2xl font-bold">Lush Living Room Statements</h3>
                <p className="text-text-muted text-sm">
                  Bold foliage that transforms your living area into a peaceful sanctuary. Air-purifying and vibrant.
                </p>
                <p className="text-xl font-bold text-accent-light">Rs. 1200/-</p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-primary-bg px-6 py-2 rounded-lg font-bold hover:bg-accent-light">
                    Explore
                  </button>
                  <button className="p-2 border border-white/20 rounded-lg hover:bg-white/10 text-white">
                    <ShoppingCartIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden">
                <img 
                  src="/images/human_care.png" 
                  alt="Living Room Plant" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyPlants;
