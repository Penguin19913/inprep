
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/student/SearchBar';
import { useParams } from 'react-router-dom';
import BatchCard from '../../components/student/BatchCard.jsx';
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assests';
import Footer from '../../components/student/Footer';


const CoursesList = () => {

  const {navigate, allBatches} = useContext(AppContext);
  const {input} = useParams();
  const [filteredBatch, setFilteredBatch] = useState([]);

  useEffect(() => {
  if(allBatches && allBatches.length > 0) {
    const tempBatches = allBatches.slice();

    input ? 
      setFilteredBatch(
        tempBatches.filter(
          item => item.batchTitle.toLowerCase().includes(input.toLowerCase())
        )
      )
    : setFilteredBatch(tempBatches)
  }else{
        console.log("hello")

  }
},[allBatches, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left min-h-[62vh]'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={()=> navigate('/')}>Home</span> / <span>Batches List</span></p>
          </div>
          <div className='flex-1 w-full'>
          <SearchBar data={input}/>
            
          </div>
        </div>
        { input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8-mb-8 text-gray-600'>
          <p>{input}</p>
          <img src={assets.cross_icon} alt="cross_icon" className='cursor-pointer' onClick={()=>navigate('/course-list')} />
        </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredBatch.map((batch, index)=> <BatchCard key={index} batch={batch}/>)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CoursesList
