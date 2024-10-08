"use client"
import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../configs/db';
import { eq, and } from 'drizzle-orm';
import { CourseList, CourseChapter } from '../../../../configs/schema';
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

function CourseStart() {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const params = useParams();
  const contentRef = useRef(null);

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    }
  }, [params?.courseId]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedChapter]);

  const GetCourse = async () => {
    const result = await db.select().from(CourseList).where(eq(CourseList.courseId, params.courseId));
    setCourse(result[0]);
    if (result[0]?.courseOutput?.Chapters?.length > 0) {
      setSelectedChapter(result[0].courseOutput.Chapters[0]);
      GetSelectedChapterContent(0);
    }
  };

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db.select().from(CourseChapter).where(
      and(eq(CourseChapter.chapterId, chapterId), eq(CourseChapter.courseId, params.courseId))
    );
    console.log(result);
    setChapterContent(result[0]);
  };

  const handleChapterChange = (index) => {
    setCurrentChapterIndex(index);
    setSelectedChapter(course.courseOutput.Chapters[index]);
    GetSelectedChapterContent(index);
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < course.courseOutput.Chapters.length - 1) {
      handleChapterChange(currentChapterIndex + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      handleChapterChange(currentChapterIndex - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Static Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm z-50">
        <Link href="/dashboard">
          <Image src={'/logo.svg'} width={60} height={20} alt="Logo" />
        </Link>
        <UserButton />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Chapters */}
        <aside className="w-72 border-r shadow-md bg-white flex flex-col">
          <h2 className='font-bold text-lg bg-primary p-4 text-white'>{course?.courseOutput?.CourseName}</h2>
          <div className="flex-1 overflow-y-auto">
            {course?.courseOutput?.Chapters.map((chapter, index) => (
              <div 
                key={index} 
                className={`hover:bg-gray-100 cursor-pointer ${selectedChapter?.ChapterName === chapter?.ChapterName && 'bg-gray-100'}`}
                onClick={() => handleChapterChange(index)}
              >
                <ChapterListCard chapter={chapter} index={index} />
              </div>
            ))}
          </div>
        </aside>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-4 flex flex-col" ref={contentRef}>
          <ChapterContent chapter={selectedChapter} content={chapterContent} />
          
          {/* Navigation buttons */}
          <div className="mt-auto pt-4 flex justify-between mb-10">
            <button
              onClick={handlePreviousChapter}
              disabled={currentChapterIndex === 0}
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
            >
              Previous Chapter
            </button>
            <button
              onClick={handleNextChapter}
              disabled={currentChapterIndex === (course?.courseOutput?.Chapters.length - 1)}
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
            >
              Next Chapter
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseStart;