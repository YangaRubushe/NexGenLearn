import Image from 'next/image'
import React, { useState } from 'react'
import { Puzzle } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import EditCourseBasicInfo from './EditCourseBasicInfo';


function CourseBasicInfo({course,refreshData}) {

  const [selectedFile,setSelectedFile]=useState();
  const onFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  }


  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
        <div>
          <h2 className='font-bold text-3xl'>{course?.courseOutput?.CourseName} 
            <EditCourseBasicInfo  course={course} refreshData={()=>refreshData(true)}/></h2>
          <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.Description}</p>
          <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><Puzzle />{course?.category}</h2>
          <Button className='w-full mt-5'>Start</Button>
        </div>
        <div >
          <label htmlFor='upload-image' className='flex justify-center items-center'>
          <Image 
            src={selectedFile?selectedFile: '/2702154.png'} 
            width={200} 
            height={200}
            alt="Course Image"
            className='rounded-xl h-[200px] cursor-pointer'
          />
          </label>
          <input type='file' id="upload-image" className='opacity-0' onChange={onFileSelected}/>
          
        </div>
      </div>
    </div>
  )
}

export default CourseBasicInfo