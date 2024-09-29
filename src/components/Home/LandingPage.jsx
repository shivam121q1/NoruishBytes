import React from 'react'
import image1 from "../../assets/Jagger1.jpg"
import image2 from "../../assets/Jagger2.jpg"
import image3 from "../../assets/Jagger3.jpg"



const LandingPage = () => {
  return (
    <div>
        <section className="bg-gray-50 py-12">
      <div className="w-11/12 max-w-maxContent container mx-auto flex flex-col md:flex-row gap-x-4 items-start justify-between">
        
        {/* Left Section */}
        <div className="md:w-4/6 gap-y-8 flex-col flex mt-2">
          <h2 className="text-7xl font-bold text-yellow-600 text-center">
          Golden <span className='text-yellow-900'>Sweetness</span> from India to the World
          </h2>
          {/* Images */}
          <div className="flex gap-x-2 items-center mt-4">
            <img
              src={image1}// Replace with your image URL
              alt="Jaggery 1"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <img
              src={image2} // Replace with your image URL
              alt="Jaggery 2"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <img
              src={image3}// Replace with your image URL
              alt="Jaggery 3"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Right Section: Form */}
        <div className="md:w-2/6 bg-white p-8 shadow-lg rounded-lg mt-8 md:mt-0">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="tel"
                id="phone"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default LandingPage
