"use client";
import React, { useContext } from 'react';
import { Input } from '../../../components/ui/input';  // Correct import
import { Textarea } from '../../../components/ui/textarea'
import { UserInputContext } from '../../_context/UserInputContext'

function TopicDescription() {

  const {userCourseInput, setUserCourseInput}=useContext(UserInputContext);

  const handleInputChange=(fieldName,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
    
  }

  return (
    <div className='mx-20 lg:mx-44'>
        {/** Input topic */}
        <div>
            <label>💡Write the topic for which you want to generate a course</label>
            <Input placeholder={'Topic'} className="h-14 text-xl" 
            onChange={(e)=>handleInputChange('topic', e.target.value)}
            />
        </div>
        <div>
            <label>📝Tell us more about your topic, what you want to be included in the (Optional) </label>
            <Textarea placeholder="About your course" className = "h-24 text-xl"
            onChange={(e)=>handleInputChange('description', e.target.value)}

            />
        </div>
        

        {/** Textarea desc */}
    </div>
  );
}

export default TopicDescription;
