import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                 <span className="text-primary-bg font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">FloraVision.</span>
            </a>
            <p className="text-text-muted max-w-sm">
              We bring nature closer to your life. Our mission is to provide high-quality, sustainable plants that enhance your well-being and beautify your home.
            </p>
            <div className="flex items-center gap-4">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary-bg transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="/" className="hover:text-accent-light">Home</a></li>
              <li><a href="#shop" className="hover:text-accent-light">Shop</a></li>
              <li><a href="#types" className="hover:text-accent-light">Plant Types</a></li>
              <li><a href="#contact" className="hover:text-accent-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-lg font-bold">For Every Update</h4>
            <p className="text-text-muted">Subscribe to our newsletter for tips and deals.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex-1 text-white focus:outline-none focus:border-accent-light"
              />
              <button className="bg-white text-primary-bg px-6 py-3 rounded-xl font-bold hover:bg-accent-light">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>© 2026 FloraVision. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
