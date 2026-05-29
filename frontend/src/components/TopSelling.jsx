import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const TopSelling = () => {
  const plants = [
    { name: 'Aglaonema plant', price: '800/-', image: '/images/human_care.png' },
    { name: 'Cactus', price: '500/-', image: '/images/cactus.png' },
    { name: 'Swiss cheese Plant', price: '400/-', image: '/images/lifestyle.png' },
    { name: 'Plantain Lily', price: '550/-', image: '/images/hero_bg.png' },
    { name: 'Sansevieria plant', price: '450/-', image: '/images/human_care.png' },
    { name: 'Agave plant', price: '350/-', image: '/images/lifestyle.png' },
  ];

  return (
    <section id="shop" className="py-24 bg-white/5">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 underline decoration-accent-color decoration-4 underline-offset-8">
          Our Top Selling Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div 
              key={index} 
              className="glass p-6 group hover:border-accent-light transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-primary-bg/50">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
              <p className="text-text-muted text-sm mb-4">
                High quality, air-purifying and easy to care for.
              </p>
              <div className="w-full flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-accent-light">Rs. {plant.price}</span>
                <button className="p-3 bg-white/10 hover:bg-accent-color hover:text-primary-bg rounded-xl transition-all">
                  <ShoppingCartIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
