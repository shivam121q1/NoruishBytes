import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navabar/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Footer from './components/Home/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/export-info" element={<ExportInfo />} /> */}
    </Routes>
    <Footer />

    </div>
  
 
  )
}

export default App
