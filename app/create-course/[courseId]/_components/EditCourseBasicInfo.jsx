'use client'

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog"
import { SquarePen } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Textarea } from '../../../../components/ui/textarea'
import { CourseList } from '../../../../configs/schema'
import { db } from '../../../../configs/db'
import { eq } from 'drizzle-orm'

export default function EditCourseBasicInfo({ course }) {
    
    const [name,setName]=useState();
    const [description,setDescription]=useState();

    useEffect(()=>{
        setName(course?.courseOutput?.CourseName);
        setDescription(course?.courseOutput?.Description);
    },[course])
    const onUpdateHandler=async()=>{
        course.courseOutput.CourseName=name;
        course.courseOutput.Description=description;
        const result=await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id})

        console.log(result)
    }

    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SquarePen className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription className="text-zinc-400">
            You can update the course details here. Changes will be saved immediately.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-3">
          <div>
            <Label>
              Course Title
            </Label>
            {/* Updated to use defaultValue and access the correct path */}
            <Input defaultValue={course?.courseOutput?.CourseName}
              onChange={(event) => setName(event?.target.value)}
              />
          </div>
          <div>
            <Label>
              Description
            </Label>
            <Textarea className='h-40' defaultValue={course?.courseOutput?.Description}
            onChange={(event) => setDescription(event?.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={onUpdateHandler}>Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
