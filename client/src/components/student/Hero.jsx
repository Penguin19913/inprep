import React from 'react'
import { assets } from '../../assets/assests'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="relative w-full mx-auto">
  {/* Background Image */}
  <img
    src={assets.kids_studying}
    alt="Kids Studying"
    className="w-full h-auto rounded-lg shadow"
  />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bottom-0 text-black bg-black/20">
    <h2 className="text-2xl md:text-7xl font-bold text-white">Complete NCERT-based learning starting from ₹299!</h2>
    <p className="mt-2 text-lg text-white">Fun, Affordable, Teacher-led classes from Class 1 to 12.</p>
    <SearchBar />
  </div>
</div>
  )
}

export default Hero
