import Image from 'next/image'
import React, { useState } from 'react'
import { Puzzle } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage} from '../../../../configs/firebaseConfig';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import { eq } from 'drizzle-orm';


function CourseBasicInfo({course,refreshData}) {

  const [selectedFile,setSelectedFile]=useState();

  /**
   * Select file and Upload to Firebase Storage
   * @param {*} event 
   */
  const onFileSelected = async(event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));

      const fileName=Date.now()+'.jpg';
      const storageRef=ref(storage,'ai course/' +  fileName)
      await uploadBytes(storageRef,file).then((snapshot)=>{
        console.log('Uploaded')
      }).then(resp=>{
        getDownloadURL(storageRef).then(async(downloadUrl)=>{
          console.log(downloadUrl)
          await db.update(CourseList).set({
            courseBanner:downloadUrl
          }).where(eq(CourseList.id,course?.id))
        })
      })
    }
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