import React from 'react';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';


const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

function ChapterContent({ chapter, content }) { // Destructure props here

    console.log(chapter);

    return (
        <div className='p-10'>
            <h2 className='font-bold text-2xl'>{chapter?.ChapterName}</h2>
            <p className='mt-5 text-gray-400'>{chapter?.About}</p> {/* Display chapter content description */}

            {/* Conditionally render Video ID and Video */}
            {content ? (
                <>
                    <div className='flex justify-center mt-6 my-6'>
                        <YouTube
                            videoId={content.videoId}
                            opts={opts}
                        />
                    </div>
                </>
            ) : (
                <p className='mt-5 text-gray-400'>Please select a chapter to view the video.</p>
            )}

            <div>
                {content?.content?.map((item, index) => (
                    <div className='p-5 border rounded-lg bg-blue-100 mb-3 shadow-sm'>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        {/* <p className='text-gray-500 mt-2 mb-5 whitespace-pre-wrap '>{item.description}</p> */}
                        <ReactMarkdown className='text-gray-500 mt-2 mb-5 whitespace-pre-wrap '>{item.description}</ReactMarkdown>

                        { item.code && <div className='p-4 bg-black text-white rounded-lg mt-5}'>
                        <pre>
                            <code>{item.code}</code>
                        </pre>
                        </div> }

                    </div>

                ))}  
            </div>
        </div>
    );
}

export default ChapterContent;
