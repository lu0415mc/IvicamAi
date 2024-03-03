// "use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";


const MainNavbar = () => {

    const {user} = useUser();
    
   
  return (
  <div className="h-12 px-3 md:px-5 lg:px-8 flex items-center w-full backdrop-blur top-0 z-[80] fixed justify-between md:h-14 ">
    <Link href='/' className="flex md:hidden">
        <Image src="/logo-mobile.png" height={50} width={50} alt="logo"/>
    </Link>
    <Link href='/' className="hidden md:flex">
        <Image src="/logo-desktop.svg" height={150} width={150} alt="logo"/>
    </Link>

    <div className="flex gap-5">
        
        {user ?( <Link href="/Dashboard" className="flex text-slate-200 p-3 bg-[#040D12] rounded-md hover:hover:bg-emerald-500/10">
            

            Dashboard →
        
        
        </Link>):(
            <Link href="/sign-in" className="text-slate-200 p-3 rounded-md bg-[#040D12] hover:hover:bg-emerald-500/10">
            Login →
        
        </Link>
        )}
    </div>
  </div>);
};

export default MainNavbar;
