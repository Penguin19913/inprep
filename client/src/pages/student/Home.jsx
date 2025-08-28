import React, { useEffect } from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'
import WhyInPrep from '../../components/student/WhyInprep'
import HowItWorks from '../../components/student/HowItWorks'
import Testimonials from '../../components/student/Testimonials'
import Pricing from '../../components/student/Pricing'
import FAQ from '../../components/student/FAQ.jsx'
import CTA from '../../components/student/CTA.jsx'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col bg-[#f5eddf]'>
      <Hero />
      <WhyInPrep />
      {/* <Companies /> */}
      <CoursesSection />
      <HowItWorks />
      <Testimonials />
      {/* <TestimonialsSection /> */}
      {/* <CallToAction /> */}
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
