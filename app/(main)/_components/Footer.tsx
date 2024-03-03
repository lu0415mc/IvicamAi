import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-5 lg:px-8  pt-20 pb-10 bg-[#191717] ">
      <div className="flex flex-col">
        <Link href='/' className="flex md:hidden">
        <Image src="/logo-mobile.png" height={80} width={80} alt="logo"/>
    </Link>
    <Link href='/' className="hidden md:flex">
        <Image src="/logo-desktop.svg" height={200} width={200} alt="logo"/>
    </Link>
    
      </div>
      <div className="flex-col flex md:flex-row gap-5">

      <Link href="https://mbalinktree.vercel.app/">

        <Button variant="outline" size="sm" className="hover:text-blue-800">
          Other Products
        </Button>
      </Link>
      <Link href="/">

        <Button variant="outline" size="sm" className="hover:text-blue-800">
         Terms & Conditions
        </Button>
      </Link>
      </div>
      
    
    </div>
  );
};

export default Footer;
