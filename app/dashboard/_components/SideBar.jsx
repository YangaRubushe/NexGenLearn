'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { House, BookPlus, Telescope, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Progress } from "../../../components/ui/progress";
import { UserCourseListContext } from '../../_context/UserCourseListContext';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

function SideBar() {
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
    const path = usePathname();
    const router = useRouter();
    const { signOut } = useAuth();

    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <House />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <Telescope />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <BookPlus />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <LogOut />,
            action: () => handleLogout()
        }
    ];

    const handleLogout = () => {
        signOut().then(() => {
            router.push('/');
        });
    };

    const coursesCreated = userCourseList?.length || 0;
    const isCourseLimitReached = coursesCreated >= 5;

    return (
        <div className='fixed h-full md md:w-64 p-6 shadow-lg'>
            <a href="../">
                <Image src={'/logo.svg'} width={60} height={20} alt="Logo" />
            </a>
            <hr className='my-5' />

            <ul>
                {Menu.map((item, index) => (
                    item.name === 'Logout' ? (
                        <div
                            key={index}
                            onClick={item.action}
                            className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3`}
                        >
                            <div className='text-2xl'>
                                {item.icon}
                            </div>
                            <h2>{item.name}</h2>
                        </div>
                    ) : (
                        <Link href={item.path} key={index}>
                            <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3
                                ${item.path == path && 'bg-gray-100 text-black'}`}>
                                <div className='text-2xl'>
                                    {item.icon}
                                </div>
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    )
                ))}
            </ul>

            <div className='absolute bottom-10 w-[80%]'>
                <Progress value={(coursesCreated / 5 * 100)} />
                <h2 className="text-sm my-2">{coursesCreated} out of 5 Courses Created</h2>
                {isCourseLimitReached ? (
                    <h2 className="text-xs text-red-500">Course limit reached. Please upgrade your plan.</h2>
                ) : (
                    <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited courses</h2>
                )}
            </div>
        </div>
    );
}

export default SideBar;