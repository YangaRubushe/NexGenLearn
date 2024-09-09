import React from 'react'
import HeaderDash from '../_components/HeaderDash'

function CreateCourseLayout({children}) {
    return (
        <div>
            <HeaderDash/>
            {children}
        </div>
    )
}

export default CreateCourseLayout