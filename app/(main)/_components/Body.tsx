"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie from 'react-lottie';
import animationData from './lottie-hero.json';

const Body = () => {
    const{user} = useUser();
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      
    };
  
  return (
  <div className="wrapper grid grid-cols-1  md:grid-cols-2 gap-5 pt-20 lg:h-[90vh]">
    <div className="flex flex-col justify-center gap-8">
    <h1 className="font-bold text-3xl md:text-5xl text-[#163020]">Unleashing Intelligent Potential:<p className="text-[#304D30]">Empower Your Business with Cutting-Edge AI SaaS Solutions</p></h1>
     <div className="flex gap-5">

     <Button size="lg" asChild className="w-fit">
              <Link href="/explore">
                Explore Now
              </Link>
    </Button>
     {user ? 
        (<Button size="lg" asChild className="w-min">
              <Link href="/Dashboard">
                Dashboard
              </Link>
    </Button>):(
        <Button size="lg" asChild className="w-min">
              <Link href="/sign-in">
                Try IvicamAi
              </Link>
    </Button>
    )
    }
     </div>
    </div>
     
          <Lottie 
	    options={defaultOptions}
        
        
      />
    </div>

  );
};

export default Body;
