"use client";
import React from 'react';
import { Input } from '../../../components/ui/input';  // Correct import
import { Textarea } from '../../../components/ui/textarea'
function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
        {/** Input topic */}
        <div>
            <label>Write the topic for which you want to generate a course</label>
            <Input placeholder={'Topic'} />
        </div>
        <div>
            <label>Tell us more about your topic, what you want to be included in the (Optional) </label>
            <Textarea placeholder="About your course"/>
        </div>
        

        {/** Textarea desc */}
    </div>
  );
}

export default TopicDescription;
