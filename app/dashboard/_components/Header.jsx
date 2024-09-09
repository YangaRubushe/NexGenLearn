import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

function Header(){
    return (
        <div className='flex justify-between items-center p-6 shadow-sm'>
            <Image  />
            {/** <Image src={'/logo.svg'} width={60} height={20} /> */}
            <UserButton/>
        </div>
    )
}

export default Header;