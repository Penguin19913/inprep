import React, { useContext } from 'react'
import { assets } from '../../assets/assests'
import { AppContext } from '../../context/AppContext'

const Footer = () => {
  const {navigate} = useContext(AppContext)
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10 '>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:flex-row items-start w-full md:gap-3'>
          <img src={assets.inprep} alt="logo_dark" className='w-10 h-10 md:mt-6'/>
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            Inprep by BeyondStudy is a leading online learning platform that offers a wide range of courses and resources to help you achieve your educational and professional goals.
          </p>
        </div>
        <div className=' md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-cool w-full text-sm text-white/80 md:space-y-2'>
            <li><a className='hover:cursor-pointer mr-1 color-black' href="#" onClick={()=> navigate('/')}>Home | </a></li>
            <li><a href="#">About Us</a></li>
            {/* <li><a href="#">Contact Us</a></li> */}
            {/* <li><a href="#">Privacy Policy</a></li> */}
          </ul>
        </div>
        <div className='md:flex flex-col items-start w-full'>
          <img src={assets.made_in_india} alt="logo_dark" className='w-auto h-10 md:mt-6'/>
          <br />
          <h2 className='font-semibold text-white mb-1'>Contact us at:-</h2>
          <p className='text-white/80 ml-2'>  +91 6387992259</p>
          <p className='text-white/80 ml-2'>  +91 9103998735</p>
          <p className='text-white/80 ml-2'>  contactinprep@gmail.com</p>
          {/* <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email...' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div> */}

          {/* <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='hidden md:block text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email...' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div> */}
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright © 2025 Inprep by BeyondStudy. All Right Reserved.</p>
    </footer>
  )
}

export default Footer