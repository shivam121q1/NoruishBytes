import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import Service from '../components/Home/Service'
import MakingOfJaggerySection from '../components/Home/ProductionProcess'
import ServiceSection from '../components/Home/ServiceSection'
import ProductSection from '../components/Home/ProductSection'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <section>
          <Service/>
        </section>
        <section>
          {/* <MakingOfJaggerySection /> */}
          <ProductSection />
        </section>
       
    </div>
  )
}

export default Home
