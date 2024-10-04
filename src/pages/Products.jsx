import React from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Organic Jaggery Blocks',
    description: '100% organic jaggery made from traditional methods, available in bulk sizes.',
    price: '$25 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg",
  },
  {
    id: 2,
    name: 'Jaggery Powder',
    description: 'Fine jaggery powder for easy use in cooking and baking. Perfect for bulk orders.',
    price: '$20 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg"
  },
  {
    id: 3,
    name: 'Flavored Jaggery',
    description: 'Infused with natural spices like ginger and cardamom for unique flavors.',
    price: '$30 per kg',
    image: "https://www.shutterstock.com/shutterstock/photos/2392379161/display_1500/stock-photo-close-up-shot-of-jaggery-neatly-placed-in-a-bowl-against-a-clean-white-background-isolated-2392379161.jpg"
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          Our Jaggery Products
        </h2>
        <p className="mb-12 text-gray-600">
          Discover our wide variety of organic jaggery products, each made with the highest quality standards.
        </p>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4">
                  <span className="text-lg font-semibold text-yellow-600">Rate</span>
                </div>
                <button className="mt-6 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
