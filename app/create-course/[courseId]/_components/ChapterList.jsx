import React from 'react';
import { Clock } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import EditChapters from './EditChapters';

function ChapterList({ course,refreshData }) {
  return (
    <div className='mt-3'>
      <h2 className='text-xl font-medium'>Chapters</h2>
      <div className='mt-2'>
        {/* Check if Chapters is an array before mapping */}
        {Array.isArray(course?.courseOutput?.Chapters) && course.courseOutput.Chapters.length > 0 ? (
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
                  {/* Add the edit button next to the chapter name */}
                  <EditChapters course={course} index={index} refreshData={refreshData} />
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
        )}
      </div>
    </div>
  );
}

export default ChapterList;
