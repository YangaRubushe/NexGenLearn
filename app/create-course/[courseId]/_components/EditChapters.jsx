import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { SquarePen } from 'lucide-react';
import { Textarea } from '../../../../components/ui/textarea';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Button } from '../../../../components/ui/button';
import { db } from '../../../../configs/db';
import { CourseList } from '../../../../configs/schema';
import { eq } from 'drizzle-orm';

function EditChapters({ course, index, refreshData }) {
  // Access chapters from course
  const Chapters = course?.courseOutput?.Chapters;

  // Initialize state with chapter data
  const [ChapterName, setChapterName] = useState();
  const [About, setAbout] = useState();

  // Update state when course or index changes
  useEffect(() => {
    
      setChapterName(Chapters[index].ChapterName);
      setAbout(Chapters[index].About);
  }, [course]);

  // Update chapter handler
  const onUpdateHandler = async () => {
    course.courseOutput.Chapters[index].ChapterName=ChapterName;
    course.courseOutput.Chapters[index].About=About;
    
    const result=await db.update(CourseList).set({
        courseOutput:course?.courseOutput
    }).where(eq(CourseList?.id,course?.id))
    .returning({id:CourseList.id})

    console.log(result);
    refreshData(true)

    // const updatedChapters = [...Chapters];
    // updatedChapters[index] = {
    //   ...updatedChapters[index],
    //   ChapterName: ChapterName,
    //   About: About
    // };

    // Assuming you have an update function to update the course
    // Replace `updateCourse` with your actual update logic
    // try {
    //   await updateCourse({ ...course, courseOutput: { ...course.courseOutput, Chapters: updatedChapters } });
    //   console.log("Chapter updated successfully");
    // } catch (error) {
    //   console.error("Error updating chapter:", error);
    // }
  };

  return (
    <Dialog>
        <DialogTrigger><SquarePen className="h-4 w-4" /></DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white text-black">
            <DialogHeader>
                <DialogTitle>Edit Chapter</DialogTitle>
                <DialogDescription>
                    <div className="grid gap-3 py-3">
                        <div>
                            <Label>
                                Course Title
                            </Label>
                            {/* Updated to use defaultValue and access the correct path */}
                            <Input defaultValue={Chapters[index].ChapterName}
                                onChange={(event) => setChapterName(event?.target.value)}
                            />
                        </div>
                        <div>
                            <Label>
                                Description
                            </Label>
                            <Textarea className='h-40' defaultValue={Chapters[index].About}
                                onChange={(event) => setAbout(event?.target.value)}
                            />
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogClose>
                <div className="flex justify-end">
                    <Button onClick={onUpdateHandler}>Update</Button>
                </div>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>

)
}

export default EditChapters
