"use client"; // Ensure this component runs on the client side
import React from 'react';
import Link from 'next/link'; // Import Link
import Image from 'next/image'; // Import Image
import { UserButton } from '@clerk/nextjs'; // Import UserButton

const HeaderStart = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/dashboard">
        <Image src={'/logo.svg'} width={60} height={20} alt="Logo" />
      </Link>
      <UserButton />
    </div>
  );
};

export default HeaderStart;
