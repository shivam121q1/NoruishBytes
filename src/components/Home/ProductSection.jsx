import React from 'react'
import ProductCard from './Product'
import Image from "../../assets/Jagger1.jpg"
import { products } from '../../data/products'
const ProductSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 flex-wrap   justify-center items-center bg-[#F8F3F0] h-auto pt-8 my-4'>
        {products.map((item,index)=>(
          <ProductCard name={item.name} description={item.description} image={item.image} />  
        ))}
        
    </div>
  )
}

export default ProductSection

