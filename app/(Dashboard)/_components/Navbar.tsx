
import { UserButton } from "@clerk/nextjs";
import React from "react";

import { MobileSidebar } from "./mobile-sidbar";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex w-full p-4 items-center justify-between md:justify-end md:hidden">
        <Link href='/Dashboard' className="">
        <Image src="/logo-mobile.png" height={50} width={50} alt="logo"/>
    </Link>
  <div className="flex gap-5 items-center md:gap-0">
    
        <UserButton afterSignOutUrl="/"/>
        <MobileSidebar/>
    
  
    
  </div>
    </div>
  );
};

export default Navbar;
