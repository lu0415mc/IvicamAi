"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
    const {user} = useUser();
  return (
  <div className="h-12 px-3 md:px-5 lg:px-8 flex items-center w-full bg-white top-0 z-[80] fixed justify-between md:h-14 border-b-2 ">
    <Link href='/' className="flex md:hidden">
        <Image src="/logo-mobile.png" height={50} width={50} alt="logo"/>
    </Link>
    <Link href='/' className="hidden md:flex">
        <Image src="/logo-desktop.svg" height={150} width={150} alt="logo"/>
    </Link>

    <div className="flex gap-5">
        <Link href="/explore" className="text-#163020">
        <Button variant="outline">
            Explore
        </Button>
        </Link>
        {user ?( <Link href="/Dashboard" className="text-#163020">
        <Button>
            Dashboard
        </Button>
        </Link>):(
            <Link href="/sign-in" className="text-#163020">
        <Button variant="outline">
            Login
        </Button>
        </Link>
        )}
    </div>
  </div>);
};

export default MainNavbar;
