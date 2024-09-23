"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';

function Header() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const isLandingPage = pathname === '/';

  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <Link href="/">
        <Image src={'/logo.svg'} width={60} height={20} alt="Logo" />
      </Link>
      
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          {isLandingPage && (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          )}
          
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-blue-600">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
