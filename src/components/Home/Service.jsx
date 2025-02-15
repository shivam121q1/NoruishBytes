import { Briefcase, Globe, Ship } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full bg-[#F8F3F0] py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-12">
        We specialize in international trade, ensuring smooth{" "}
        <span className="text-orange-600 font-semibold">import & export</span> of 
        high-quality goods. Our services are tailored to streamline your business globally.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        
        {/* Export Service */}
        <div className="group w-full h-96 bg-white/90 shadow-xl hover:shadow-2xl transition-all rounded-2xl p-8 relative flex flex-col items-center text-center border border-gray-300 backdrop-blur-md hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full shadow-lg mb-6">
            <Globe className="w-14 h-14 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-orange-700 transition">
            Global Export
          </h2>
          <p className="text-gray-600 text-lg">
            We <span className="text-orange-600 font-semibold">export premium goods</span> across the world with fast, reliable, and cost-effective shipping.
          </p>
          <button className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Get a Quote
          </button>
        </div>

        {/* Import Service */}
        <div className="group w-full h-96 bg-white/90 shadow-xl hover:shadow-2xl transition-all rounded-2xl p-8 relative flex flex-col items-center text-center border border-gray-300 backdrop-blur-md hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full shadow-lg mb-6">
            <Ship className="w-14 h-14 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-green-700 transition">
            Secure Import
          </h2>
          <p className="text-gray-600 text-lg">
            We <span className="text-green-600 font-semibold">import high-quality products</span> from trusted suppliers worldwide to meet your needs.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        {/* Sourcing Agent Service */}
        <div className="group w-full h-96 bg-white/90 shadow-xl hover:shadow-2xl transition-all rounded-2xl p-8 relative flex flex-col items-center text-center border border-gray-300 backdrop-blur-md hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full shadow-lg mb-6">
            <Briefcase className="w-14 h-14 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition">
            Sourcing Experts
          </h2>
          <p className="text-gray-600 text-lg">
            We <span className="text-blue-600 font-semibold">find trusted suppliers</span> and negotiate the best prices for your business needs.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}
