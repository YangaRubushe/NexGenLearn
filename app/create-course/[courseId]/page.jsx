"use client"
import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/db'
import { CourseList } from '../../../configs/schema'
import { and, eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '../../../components/ui/button'
import { GenerateChapterContent_AI } from '../../../configs/AiModel'
import LoadingDialog from '../_components/LoadingDialog'
import service from '../../../configs/service'
import { getVideos } from '../../../configs/service'



function CourseLayout({ params }) {

    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        params && GetCourse();
    }, [params, user])
    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)))
        setCourse(result[0]);
        console.log(result);
    }

    const GenerateChapterContent = async () => {
        setLoading(true);
        const chapters = course?.courseOutput?.Chapters;

        chapters.forEach(async (chapter, index) => {
            const PROMPT = 'Explain the concept in Detail on Topic:' + course?.courseOutput?.CourseName + ', Chapter:' + chapter?.ChapterName + ', in JSON Format with list of array with field as title, description detail, Code Example (Code field in <precode> format) if applicable';
            console.log(PROMPT);

            if (index<3) {
                try {
                    let videoId='';
                    const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
                    console.log(result?.response?.text());

                    //Generate Video URL
                    service.getVideos(course?.courseOutput?.CourseName+':'+chapter?.ChapterName).then(resp=>{
                        console.log(resp);
                        videoId=resp[0]?.id?.videoId;
                    })
                    //Save Chapter Content + Video URL
                    // await db.insert(CourseList).values({

                    // })

                    setLoading(false);

                } catch (e) {
                    setLoading(false);
                    console.log(e);
                }
            }
        });
    }
    return (
        <div className='mt-10 px-7 md:px-20 lg:px-44 '>
            <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

            <LoadingDialog loading={loading} />

            {/**Basic Info */}
            <CourseBasicInfo course={course} refreshData={() => GetCourse()} />

            {/* Course Detail */}
            <CourseDetail course={course} />
            {/* List of Lesson */}
            <ChapterList course={course} refreshData={() => GetCourse()} />

            <div className="flex justify-end mt-10 mb-10">
                <Button onClick={GenerateChapterContent}>Generate Course</Button>
            </div>

        </div>
    )
}

export default CourseLayout