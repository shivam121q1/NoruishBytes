import React from 'react'
import image1 from '../../assets/Jagger1.jpg'
import image2 from '../../assets/Jagger2.jpg'

const Service = () => {
  return (
    <section className='bg-gray-50 py-12'>
      <div className='w-11/12 max-w-maxContent mx-auto'>
        
        {/* Centered Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold text-amber-700'>Services</h1>
        </div>
        
        {/* Services Section */}
        <div className='flex flex-col md:flex-row gap-8'>
          
          {/* First Service Block */}
          <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
            <img src={image1} alt="Service 1" className='w-full h-64 object-cover rounded-lg mb-4'/>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione et, doloribus atque a nostrum, odio temporibus rem dolorem ad perspiciatis dignissimos excepturi provident eligendi officia nam commodi voluptatibus id.
            </p>
          </div>
          
          {/* Second Service Block */}
          <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
            <img src={image2} alt="Service 2" className='w-full h-64 object-cover rounded-lg mb-4'/>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione et, doloribus atque a nostrum, odio temporibus rem dolorem ad perspiciatis dignissimos excepturi provident eligendi officia nam commodi voluptatibus id.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Service;
