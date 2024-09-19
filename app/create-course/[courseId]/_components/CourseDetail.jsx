import React, { useState, useEffect } from 'react';
import { ChartColumnBig, Hourglass, Video, BookOpen } from 'lucide-react'; // Added Video icon

// Helper function to calculate total duration
function calculateTotalDuration(chapters) {
  if (!chapters || chapters.length === 0) return 'N/A';

  let totalMinutes = 0;

  chapters.forEach((chapter) => {
    const durationText = chapter.Duration; // e.g., "5 minutes"
    const minutes = parseInt(durationText); // Extract the number (e.g., 5)
    if (!isNaN(minutes)) {
      totalMinutes += minutes;
    }
  });

  return `${totalMinutes} minutes`;
}

function CourseDetail({ course }) {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (course) {
      setLoading(false); // Set loading to false after course data is set
    }
  }, [course]);

  // Calculate total course duration based on chapters
  const totalDuration = calculateTotalDuration(course?.courseOutput?.Chapters);

  // Get the number of chapters
  const numberOfChapters = course?.courseOutput?.Chapters?.length || 'N/A';

  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3 '>
      {loading ? ( // Conditional rendering for loading state
        [1].map((item, index) => (
          <div key={index} className='flex gap-2 mt-5 bg-slate-200 animate-pulse rounded-lg h-[50px]'></div>
        ))
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          {/* Skill Level Section */}
          <div className='flex gap-2'>
            <ChartColumnBig className='text-5xl text-primary' height={50} />
            <div className='ml-4'>
              <h2 className='text-xs text-gray-500'>Skill Level</h2>
              <h2 className='font-bold text-lg'>{course?.level}</h2>
            </div>
          </div>

          {/* Duration Section */}
          <div className='flex gap-2'>
            <Hourglass className='text-5xl text-primary' height={50} />
            <div className='ml-4'>
              <h2 className='text-xs text-gray-500'>Duration</h2>
              <h2 className='font-bold text-lg'>{totalDuration}</h2> {/* Display total duration */}
            </div>
          </div>

          {/* Number of Chapters Section */}
          <div className='flex gap-2'>
            <BookOpen className='text-5xl text-primary' height={50} />
            <div className='ml-4'>
              <h2 className='text-xs text-gray-500'>No. Of Chapters</h2>
              <h2 className='font-bold text-lg'>{numberOfChapters}</h2> {/* Display number of chapters */}
            </div>
          </div>

          {/* Video Included Section */}
          <div className='flex gap-2'>
            <Video className='text-5xl text-primary' height={50} />
            <div className='ml-4'>
              <h2 className='text-xs text-gray-500'>Video Included</h2>
              <h2 className='font-bold text-lg'>{course?.includeVideo}</h2> {/* Display if video is included */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
