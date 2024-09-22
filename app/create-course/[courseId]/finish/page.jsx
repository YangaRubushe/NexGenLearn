"use client";
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { Clipboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

function FinishScreen({ params }) {
    const { user } = useUser();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (params?.courseId && user) {
            GetCourse();
        }
    }, [params, user]);

    const GetCourse = async () => {
        setLoading(true);
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)));
        setCourse(result[0]);
        setLoading(false);
    };

    const handleTakeCourse = () => {
        if (course?.courseId) {
            router.replace(`/course/${course.courseId}/start`);
        }
    };

    return (
        <div className='px-10 md:px-20 lg:px-44 my-7'>
            <h2 className='font-bold text-center text-2xl my-5 text-primary'>Congrats! Your Course is Ready</h2>

            {loading ? (
                [1].map((item, index) => (
                    <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[450px]'></div>
                ))
            ) : (
                <>
                    <CourseBasicInfo course={course} refreshData={() => console.log()} />

                    <h2 className='text-center text-gray-400 border p-2 rounded-xl mt-5 flex gap-5 items-center'>
                        <Link href={`/course/${course?.courseId}/start`}>
                            {process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}/start
                        </Link>
                        <Clipboard
                            className='h-5 w-5 cursor-pointer'
                            onClick={async () => await navigator.clipboard.writeText(
                                `${process.env.NEXT_PUBLIC_HOST_NAME}/course/${course?.courseId}/start`
                            )}
                        />
                    </h2>

                    <Button className='w-full mt-5' onClick={handleTakeCourse}>
                        Take a Course
                    </Button>
                </>
            )}
        </div>
    );
}

export default FinishScreen;
