import React from 'react';
import { Clock } from 'lucide-react';


function ChapterListCard({chapter,index}) {
    return (
        <div className='grid grid-cols-5 p-4 items-center border-b'>
            <div>
                <h2 className=' p-2 bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center'>{index+1}</h2>
            </div>
            <div className='col-span-4'>
                <h2 className='font-medium text-lg'>{chapter.ChapterName}</h2>
                <h2 className='flex gap-2 items-center text-sm text-primary mt-2'><Clock />{chapter.Duration}</h2>


            </div>
        </div>
    )
}

export default ChapterListCard;
