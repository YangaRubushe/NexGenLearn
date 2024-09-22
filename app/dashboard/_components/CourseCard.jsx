"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BookOpenText, EllipsisVertical } from 'lucide-react';
import DropdownOption from './DropdownOption';
import { db } from '../../../configs/db';
import { CourseList } from '../../../configs/schema';
import { eq } from "drizzle-orm";
import Link from 'next/link';

function CourseCard({ course, refreshData, displayUser = false }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("CourseCard received props:", { course, displayUser });
        setIsLoading(false);
    }, [course, displayUser]);

    const handleOnDelete = async () => {
        try {
            const resp = await db.delete(CourseList)
                .where(eq(CourseList.courseId, course?.courseId))
                .returning({ courseId: CourseList?.courseId });

            if (resp) {
                refreshData();
            }
        } catch (error) {
            console.error("Error deleting course:", error);
            setError("Failed to delete course");
        }
    };

    // Get the number of chapters
    const numberOfChapters = course?.courseOutput?.Chapters?.length || 'N/A';

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!course) {
        console.error("Course object is null or undefined");
        return <div>Error: Course data is missing</div>;
    }

    console.log("Rendering course:", course);

    return (
        <div className='shadow-md rounded-lg flex flex-col cursor-pointer border border-gray-200 hover:border-primary p-2 mt-5'>
            <Link href={'/course/' + course.courseId}>
                {course.courseBanner ? (
                    <Image 
                        src={course.courseBanner} 
                        width={300} 
                        height={200}
                        className='w-full h-[200px] object-cover rounded-lg' 
                        alt={course.courseOutput?.CourseName || "Course Banner"} 
                    />
                ) : (
                    <div className='w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center'>
                        No Image Available
                    </div>
                )}
            </Link>
            <div className='p-2'>
                <h2 className='font-medium text-lg flex justify-between items-center'>
                    {course.courseOutput?.CourseName || "Untitled Course"}
                    {!displayUser && (
                        <DropdownOption handleOnDelete={handleOnDelete}>
                            <EllipsisVertical />
                        </DropdownOption>
                    )}
                </h2>

                <p className='text-gray-400 text-sm my-2'>{course.category || "Uncategorized"}</p>

                <div className='flex gap-2 items-center justify-between mt-2'>
                    <h2 className='flex gap-2 items-center p-1 text-primary bg-blue-50 text-sm rounded-lg'>
                        <BookOpenText />
                        {numberOfChapters} Chapters
                    </h2>
                    <h2 className='text-sm p-1 text-primary bg-blue-50 text-sm rounded-lg'>
                        {course.level || "Unspecified"} Level
                    </h2>
                </div>

                {displayUser && course.userProfileImage && (
                    <div className='flex items-center mt-2 gap-2'>
                        <Image 
                            src={course.userProfileImage} 
                            width={35} 
                            height={35} 
                            className='rounded-full object-cover border-2 border-primary'
                            alt={course.userName || "User Profile"} 
                        />
                        <h2 className='text-sm ml-2'>{course.userName || "Anonymous"}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseCard;