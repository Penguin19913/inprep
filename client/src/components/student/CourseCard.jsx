import React, { useContext } from 'react'
import { assets } from '../../assets/assests'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {

  const {currency, calculateRating} = useContext(AppContext)

  return (
    <Link to={'/course/' + course._id} onClick={()=> scrollTo(0,0)}
    className='border border-gray-500/30 overflow-hidden rounded-lg rounded-2xl shadow-md hover:shadow-lg transition-shadow p-2 max-w-100 transform hover:scale-[1.02] transition duration-300 bg-[#cdbf9f]'>
      <img className='w-full h-40 object-cover rounded-xl' src={course.courseThumbnail} alt="Course Thumbnail"/>
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i)=>(<img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} className='h-3.5 w-3.5'alt='star_blank'/>)
            )}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount *course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard
