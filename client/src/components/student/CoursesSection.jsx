import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'
const CourseSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-5 md:px-20 px-4 md:w-350 ml-5 mr-5'>
      <h2 className='text-3x1 font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 mb-5'>Discover our top-rated courses across various categories. From Class 1 to 12 <br/> Navodya or any government school exam, our courses are crafted to deliver results.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-5 px-2 md:p-0'>
        {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div>

      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)} className='text-gray-500 border border-gray=500/30 px-10 py-3 rounded hover:bg-[#cdbf9f]' >Show all courses</Link>
    </div>
  )
}

export default CourseSection
