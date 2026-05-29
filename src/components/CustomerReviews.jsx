import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Shelly Susan',
      role: 'Plant Enthusiast',
      image: '/images/c1.png',
      text: 'The quality of the plants is exceptional. They arrived healthy and have transformed my living room into a lush sanctuary.',
      stars: 5
    },
    {
      name: 'Lula Roftson',
      role: 'Interior Designer',
      image: '/images/c2.png',
      text: 'FloraVision is my go-to for client projects. Their collection is trendy and their customer service is top-notch.',
      stars: 5
    },
    {
      name: 'Carol Huels',
      role: 'Home Gardener',
      image: '/images/c3.png',
      text: 'I love how human-centric their approach is. You can tell they really care about both the plants and the customers.',
      stars: 4
    }
  ];

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 underline decoration-accent-color decoration-4 underline-offset-8">
          Customer Review
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-light">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex text-accent-color text-sm">
                    {[...Array(review.stars)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
              <p className="text-text-muted italic leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
