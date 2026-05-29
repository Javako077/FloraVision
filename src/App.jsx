import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSelling from './components/TopSelling';
import CustomerReviews from './components/CustomerReviews';
import BestO2 from './components/BestO2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-text-main">
      <Navbar />
      <main>
        <Hero />
        <TrendyPlants />
        <TopSelling />
        <CustomerReviews />
        <BestO2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
