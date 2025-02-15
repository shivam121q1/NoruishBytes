import React from "react";
import ProductSection from "../components/Home/ProductSection";
import ServiceSection from "../components/Home/ServiceSection";


const Products = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className=" w-full mx-auto text-center">
        {/* Headline with Emphasis */}
        <h2 className="text-5xl md:text-6xl font-bold text-yellow-700 mb-6 leading-tight">
          <span className="text-yellow-900"> Our Premium Products</span>
        </h2>
        
        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10">
          Explore our  <span className="text-yellow-900 font-semibold">high-quality</span> range of imported and exported goods, sourced with <span className="text-yellow-900 font-semibold">trust</span> and <span className="text-yellow-900 font-semibold">excellence</span>.  
          We ensure seamless global trade, delivering  <span className="text-yellow-900 font-semibold">authentic, reliable, and top-grade </span>products.
        </p>

        {/* Product Section */}
        <section>
          <ProductSection />
        </section>

        {/* Services Section */}
        <section>
          <ServiceSection />
        </section>
      </div>
    </section>
  );
};

export default Products;
