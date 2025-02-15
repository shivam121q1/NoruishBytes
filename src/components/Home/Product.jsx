import { useEffect, useState } from "react";

const ProductCard = ({ image, name, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Adds a slight delay for smooth entry
  }, []);

  return (
    <div
      className={`w-full md:w-[28rem] bg-white shadow-xl border border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center 
      transition-all duration-500 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } hover:scale-[1.03] hover:shadow-2xl`}
    >
      <img
        src={image}
        alt={name}
        className="w-[90%] h-56 object-cover rounded-xl mb-6 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <h2 className="text-2xl font-semibold mb-3">{name}</h2>
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      <button className="mt-4 px-6 py-3 bg-amber-800 text-white rounded-lg transition-all duration-300 hover:bg-amber-600 hover:scale-105">
        Know More
      </button>
    </div>
  );
};

export default ProductCard;
