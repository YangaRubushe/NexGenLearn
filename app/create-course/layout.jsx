"use client"
import React, { useState} from 'react'
import HeaderDash from '../_components/HeaderDash'
import { UserInputContext } from "../_context/UserInputContext";

function CreateCourseLayout({ children }) {
    const [userCourseInput, setUserCourseInput]=useState([]);
    return (
        <div>
            <UserInputContext.Provider value={{userCourseInput, setUserCourseInput}}>
                <>
                    <HeaderDash />
                    {children}
                </>
            </UserInputContext.Provider>
        </div>
    )
}

export default CreateCourseLayout