"use client"
import React , { useState , useContext, useEffect } from 'react'
import { Layers3, Lightbulb, SquareMenu } from 'lucide-react';
import { Button } from '../../components/ui/button';
import SelectCategory from '../create-course/_components/SelectCategory'
import TopicDescription from '../create-course/_components/TopicDescription'
import SelectOption from '../create-course/_components/SelectOption'
import { UserInputContext } from '../_context/UserInputContext'
import  {GenerateCourseLayout_AI}  from '../../configs/AiModel'
import LoadingDialog from '../create-course/_components/LoadingDialog'
import {db} from '../../configs/db'
import uuid4 from 'uuid4';
import { CourseList } from '../../configs/schema';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
function CreateCourse() {

    const {userCourseInput, setUserCourseInput}=useContext(UserInputContext)
    const [loading,setLoading]=useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const {user}=useUser();

    useEffect(()=>{
        console.log(userCourseInput);
    },[userCourseInput])

    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <Layers3 />
        },
        {
            id: 2,
            name: 'Topic & Desc',
            icon: <Lightbulb />
        },
        {
            id: 3,
            name: 'Options',
            icon: <SquareMenu />
        }
    ]
    /**
     * Used to check Next Button Enable or Disable status
     */
    const checkStatus=()=>{
        if(userCourseInput?.length==0){
            return true;
        }else{
            if(activeIndex==0&&(userCourseInput?.category?.length==0||userCourseInput?.category==undefined))
            {
                return true;
            }
            if(activeIndex==1&&(userCourseInput?.topic?.length==0||userCourseInput?.topic==undefined))
            {
                return true;
            }
            else if(activeIndex==2&&(userCourseInput?.level==undefined||userCourseInput?.duration==undefined||userCourseInput?.displayVideo==undefined||userCourseInput?.noOfChapter==undefined))
            {
                return true;
            }
            return false;
        }
    }

    const GenerateCourseLayout=async()=>{
        setLoading(true)
        const BASIC_PROMPT='Generate A Course Tutorial on Following Detail With field as Course Name, Description, along with Chapter name, about, Duration'
        const USER_INPUT_PROMPT='Category:'+userCourseInput?.category+',Topic:'+userCourseInput?.topic+', Level:'+userCourseInput?.level+', Duration:'+userCourseInput?.duration+', noOfChapter:'+userCourseInput?.noOfChapter+', in JSON format'
        const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT);
        const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT)
        console.log(result.response?.text());
        console.log(JSON.parse(result.response?.text()))
        setLoading(false)
        SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
    }

    const SaveCourseLayoutInDb=async(courseLayout)=>{
        var id = uuid4();
        setLoading(true)
        const result = await db.insert(CourseList).values({
            courseId:id,
            name:userCourseInput?.topic,
            level:userCourseInput?.level,
            category:userCourseInput?.category,
            courseOutput:courseLayout,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName,
            userProfileImage:user?.imageUrl
        })

        console.log("Finish");

        setLoading(false);
    }
    return (
        <div>
            {/**Stepper */}
            <div className='flex flex-col justify-center items-center mt-10'>
                <h2 className='text-4xl text-primary font-medium'>
                    Create a course
                </h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center'>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`bg-gray-200 p-4 rounded-full text-white
                                        ${activeIndex >= index && 'bg-primary'}`}>
                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                            </div>
                            {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                                ${activeIndex-1>=index && 'bg-primary'}`}>

                            </div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-10 md:px-20 lg:px-44 mt-10'>

            {/**Component */}
            {activeIndex==0?<SelectCategory/>:activeIndex==1?<TopicDescription/>:<SelectOption/>}
            {/**Next Previous Button */}
            <div className='flex justify-between mt-10'>
                <Button disabled={activeIndex==0} variant='outline' onClick={()=>setActiveIndex(activeIndex-1)}>Back</Button>
                {activeIndex<2&& <Button disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
                {activeIndex==2&& <Button  disabled={checkStatus()} onClick={()=>GenerateCourseLayout()}>Generate Course</Button>}

            </div>
            </div>
            <LoadingDialog loading={loading}/>
        </div>
    )
}

export default CreateCourse