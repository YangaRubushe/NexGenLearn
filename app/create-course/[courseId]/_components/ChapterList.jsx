import React, { useState, useEffect } from 'react';
import { Clock, CircleCheck } from 'lucide-react';
import EditChapters from './EditChapters';

function ChapterList({ course, refreshData, edit = true }) {
  const [loading, setLoading] = useState(true);

  // Simulate data loading for a few seconds (for demonstration purposes)
  useEffect(() => {
    if (course) {
      // Simulate a delay to fetch data (remove or adjust in real scenarios)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds delay
      return () => clearTimeout(timer);
    }
  }, [course]);

  return (
    <div className='mt-3'>
      <h2 className='text-xl font-medium'>Chapters</h2>
      <div className='mt-2'>
        {/* Check if data is still loading */}
        {loading ? (
          // Show loading placeholders while data is being fetched
          [1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className='flex gap-2 items-center mb-3 border p-5 rounded-lg animate-pulse'>
              <div className='bg-slate-200 h-10 w-10 rounded-full'></div>
              <div className='ml-4 flex-1'>
                <div className='h-6 bg-slate-200 rounded w-3/4 mb-2'></div>
                <div className='h-4 bg-slate-200 rounded w-1/2 mb-1'></div>
                <div className='h-4 bg-slate-200 rounded w-1/4'></div>
              </div>
              <div className='bg-slate-200 rounded-full h-10 w-10'></div>
            </div>
          ))
        ) : (
          // Check if Chapters is an array and map over the chapters
          Array.isArray(course?.courseOutput?.Chapters) && course.courseOutput.Chapters.length > 0 ? (
            course.courseOutput.Chapters.map((chapter, index) => (
              <div key={index} className='flex gap-2 items-center mb-3 border p-5 rounded-lg'>
                {/* Chapter Number */}
                <div className='bg-primary h-10 w-10 text-white rounded-full flex items-center justify-center'>
                  {index + 1}
                </div>

                {/* Chapter Details */}
                <div className='ml-4 flex-1'>
                  {/* Chapter Name */}
                  <h2 className='font-medium text-lg'>
                    {chapter.ChapterName || 'Unnamed Chapter'}
                    {edit && <EditChapters course={course} index={index} refreshData={refreshData} />}
                  </h2>
                  {/* Chapter About */}
                  <p className='text-sm text-gray-500'>{chapter.About || 'No description available'}</p>
                  {/* Chapter Duration */}
                  <p className='flex gap-2 text-primary items-center'>
                    <Clock height={20} /> {chapter.Duration || 'No duration available'}
                  </p>
                </div>

                {/* Completion Icon */}
                <div className='flex items-center justify-center'>
                  <CircleCheck className='text-4xl text-gray-200 flex-none' />
                </div>
              </div>
            ))
          ) : (
            // Display a message if no chapters are available
            <p>No chapters available for this course.</p>
          )
        )}
      </div>
    </div>
  );
}

export default ChapterList;
