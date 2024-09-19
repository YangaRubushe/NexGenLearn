"use client"
import React, { useEffect, useState } from 'react';
import { db } from '../../../../configs/db';
import { eq, and } from 'drizzle-orm'; // Import `and` for multiple conditions
import { CourseList, CourseChapter } from '../../../../configs/schema'; // Correctly import CourseChapter
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState(); // Add this state

  useEffect(() => {
    GetCourse();
  }, []);

  /**
   * Used to get Course Information by Course Id
   */
  const GetCourse = async () => {
    const result = await db.select().from(CourseList)
      .where(eq(CourseList.courseId, params?.courseId));
    setCourse(result[0]);
  };

  /**
   * Used to get selected chapter content
   */
  const GetSelectedChapterContent = async (chapterId) => {
    // Fetch content of the selected chapter
    const result = await db.select().from(CourseChapter) // Use the correct CourseChapter schema
      .where(and(eq(CourseChapter.chapterId, chapterId),
        eq(CourseChapter.courseId, course?.courseId)));

    console.log(result);
    setChapterContent(result[0]); // Set the chapter content with videoId
  };

  return (
    <div>
      {/* Chapter list sidebar */}
      <div className='fixed md:w-72 hidden md:block h-screen border-r shadow-md bg-white'>
        <h2 className='font-bold text-lg bg-primary p-4 text-white'>{course?.courseOutput?.CourseName}</h2>

        <div>
          {course?.courseOutput?.Chapters.map((chapter, index) => (
            <div
              key={index}
              className={`hover:bg-gray-100 cursor-pointer
              ${selectedChapter?.ChapterName === chapter?.ChapterName && 'bg-gray-100'}`}
              onClick={() => { setSelectedChapter(chapter); GetSelectedChapterContent(index); }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* Content Div */}
      <div className='md:ml-72'>
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
};

export default CourseStart;
