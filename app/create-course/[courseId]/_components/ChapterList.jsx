import React from 'react';
import { Clock } from 'lucide-react';
import { CircleCheck } from 'lucide-react';

function ChapterList({ course }) {
  return (
    <div className='mt-3'>
      <h2 className='text-xl font-medium'>Chapters</h2>
      <div className='mt-2'>
        {course?.courseOutput?.Chapters.map((chapter, index) => (
          <div key={index} className='flex gap-2 items-center mb-3 border p-5 rounded-lg'>
            {/* Chapter Number */}
            <div className='bg-primary h-10 w-10 text-white rounded-full flex items-center justify-center'>
              {index + 1}
            </div>

            {/* Chapter Details */}
            <div className='ml-4 flex-1'>
              <h2 className='font-medium text-lg'>{chapter["Chapter Name"]}</h2>
              <p className='text-sm text-gray-500'>{chapter.About}</p>
              <p className='flex gap-2 text-primary items-center'><Clock height={20}/> {chapter.Duration}</p>
            </div>
            <div className='flex items-center justify-center'>
              <CircleCheck className='text-4xl text-gray-200' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
