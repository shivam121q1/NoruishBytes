import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Sample data for jaggery production steps
const jaggerySteps = [
  {
    id: 1,
    title: 'Harvesting Sugarcane',
    description: 'The process starts with harvesting fresh sugarcane, which is crucial for high-quality jaggery.',
    image: 'https://www.shutterstock.com/image-photo/roorkee-uttarakhand-india-nov-7-260nw-2071601093.jpg',
  },
  {
    id: 2,
    title: 'Extracting Juice',
    description: 'The harvested sugarcane is crushed to extract the juice, which is the primary ingredient for jaggery.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2071601075/display_1500/stock-photo-roorkee-uttarakhand-india-nov-a-worker-puts-sugarcane-into-a-crusher-machine-for-2071601075.jpg',
  },
  {
    id: 3,
    title: 'Boiling the Juice',
    description: 'The extracted juice is boiled in large pans until it thickens and starts to crystallize.',
    image: 'https://www.shutterstock.com/image-photo/roorkee-uttarakhand-india-nov-7-260nw-2071601120.jpg',
  },
  {
    id: 4,
    title: 'Cooling and Molding',
    description: 'The thickened juice is poured into molds and allowed to cool, solidifying into jaggery blocks.',
    image: 'https://www.researchgate.net/profile/Shreeneet-Rathi/publication/284030229/figure/fig4/AS:667719812804613@1536208217201/2-Typical-cooling-pan-while-manual-jaggery-molding.jpg',
  },
  {
    id: 5,
    title: 'Packaging',
    description: 'Once cooled, the jaggery is cut into pieces and packaged for distribution.',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/1/KJ/LO/JP/961484/product-jpeg-1000x1000.jpg',
  },
];

const MakingOfJaggerySection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          The Jaggery Production Line
        </h2>
        <p className="mb-12 text-gray-600">
          Follow our traditional process of jaggery production from start to finish.
        </p>

        {/* Production Line Layout */}
        <div className="flex items-start justify-center">
          {jaggerySteps.map((step, index) => (
            <div key={step.id} className="flex justify-center items-center">
             <div className='flex flex-col items-center'>
             <motion.img
                src={step.image}
                alt={step.title}
                className="mb-4 rounded-lg h-48 w-48 object-cover shadow-md transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
                viewport={{ once: true }} // Animation runs only once when it enters the viewport
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center mb-4">{step.description}</p>
            </div>
              
              {/* Render line and arrow if it's not the last step */}
              {index < jaggerySteps.length - 1 && (
                <div className="flex items-center">
                  <div className="w-1 h-16 bg-yellow-600 mx-2"></div>
                  <FaArrowRight className="text-yellow-600 text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakingOfJaggerySection;
