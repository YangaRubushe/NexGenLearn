"use client"
import Image from 'next/image';
import React from 'react';
import { BookOpenText } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import DropdownOption from './DropdownOption';
import { db } from '../../../configs/db';
import { CourseList } from '../../../configs/schema';
import { eq } from "drizzle-orm";
import Link from 'next/link'; // Import Link from next/link


function CourseCard({ course, refreshData, displayUser=false }) {

    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList).where(eq(CourseList.courseId, course?.courseId))
            .returning({ courseId: CourseList?.courseId });

        if (resp) {
            refreshData()
        }
    }

    return (
        <div className='shadow-md rounded-lg flex flex-col cursor-pointer border border-gray-200 hover:border-primary p-2  mt-5'>

            <Link href={'/course/' + course?.courseId}>
                <Image src={course?.courseBanner} width={300} height={200}
                    className='w-full h-[200px] object-cover rounded-lg' />
            </Link>
            <div className='p-2'>
                <h2 className='font-medium text-lg flex justify-between items-center'>{course?.courseOutput?.CourseName || "CourseName"}
              {!displayUser &&      <DropdownOption handleOnDelete={() => handleOnDelete()}><EllipsisVertical /></DropdownOption> }
                </h2>

                <p className='text-gray-400 text-sm my-2'>{course?.category}</p>

                <div className='flex gap-2 items-center justify-between mt-2'>
                    <h2 className='flex gap-2 items-center p-1 text-primary bg-blue-50 text-sm rounded-lg'><BookOpenText />{course?.courseOutput?.noOfChapter} Chapters </h2>
                    <h2 className='text-sm p-1 text-primary bg-blue-50 text-sm rounded-lg '>{course?.level} Level</h2>
                </div>

               {displayUser && <div className='flex items-center mt-2 gap-2'>
                    <Image src={course?.userProfileImage} width={35} height={35} className='rounded-full object-cover border-2 border-primary' />

                    <h2 className='text-sm ml-2'>{course?.userName}</h2>
                </div> }
            </div>
        </div>
    );
}

export default CourseCard
