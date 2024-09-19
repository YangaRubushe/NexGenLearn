"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { Clipboard } from 'lucide-react';

function FinishScreen({ params }) {

    const { user } = useUser();
    const [course, setCourse] = useState(null);  // Changed from [] to null to check loading state
    const [loading, setLoading] = useState(true);  // Added loading state
    const router = useRouter();

    useEffect(() => {
        params && GetCourse();
    }, [params, user]);

    const GetCourse = async () => {
        setLoading(true);  // Set loading to true when starting data fetching
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
        setCourse(result[0]);
        setLoading(false);  // Set loading to false once data is fetched
        console.log(result);
    };

    return (
        <div className='px-10 md:px-20 lg:px-44 my-7'>
            <h2 className='font-bold text-center text-2xl my-5 text-primary'>Congrats! Your Course is Ready</h2>
            
            {loading ? (
                // Show loading animation while loading
                [1].map((item, index) => (
                    <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[450px]'>
                    </div>
                ))
            ) : (
                <>
                    <CourseBasicInfo course={course} refreshData={() => console.log()} />
                    <h2 className='text-center text-gray-400 border p-2 rounded-xl mt-5 flex gap-5 items-center'>
                        {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
                        <Clipboard className='h-5 w-5 cursor-pointer ' onClick={async () => await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME + '/course/view/' + course?.courseId)} />
                    </h2>
                </>
            )}
        </div>
    );
}

export default FinishScreen;
