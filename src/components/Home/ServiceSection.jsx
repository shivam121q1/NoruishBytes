import React from 'react';

// Sample service data
const services = [
  {
    id: 1,
    title: 'Bulk Orders',
    description: 'We cater to bulk orders for businesses and retailers, ensuring timely delivery and quality.',
    icon: '📦', // You can replace these with actual icons or images
  },
  {
    id: 2,
    title: 'Custom Packaging',
    description: 'Offering customized packaging solutions to meet your branding and product needs.',
    icon: '🎁',
  },
  {
    id: 3,
    title: 'Worldwide Shipping',
    description: 'Reliable shipping services to deliver our products to customers around the globe.',
    icon: '🌍',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    description: 'Our products go through rigorous quality checks to ensure premium quality and freshness.',
    icon: '✔️',
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          What we Offer
        </h2>
        <p className="mb-12 text-gray-600">
          We offer a range of services to meet your needs, from bulk orders to custom packaging.
        </p>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-4xl mb-4 text-yellow-600 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
