"use client"
import React, { useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '../../../components/ui/button'
import Link from 'next/link';
import { UserCourseListContext } from "../../_context/UserCourseListContext"

function AddCourse() {
    const { user } = useUser();
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext)
    
    const isCourseLimitReached = userCourseList?.length >= 5;

    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-3xl'>Hi,
                    <span className='font-bold'> {user?.fullName}</span>
                </h2>
                <p className='text-sm text-gray-500'>Create new course with AI, Share with friends and Earn from it</p>
            </div>
            {isCourseLimitReached ? (
                <Link href='/dashboard/upgrade'>
                    <Button>Upgrade</Button>
                </Link>
            ) : (
                <Link href='./create-course'>
                    <Button>+ Create AI Course</Button>
                </Link>
            )}
        </div>
    )
}

export default AddCourse;