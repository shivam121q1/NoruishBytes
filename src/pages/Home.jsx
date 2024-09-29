import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import Service from '../components/Home/Service'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <section>
          <Service/>
        </section>
    </div>
  )
}

export default Home
