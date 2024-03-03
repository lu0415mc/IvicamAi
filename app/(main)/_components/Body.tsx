// "use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";
import React from "react";


const Body = () => {
    const{user} = useUser();
    
  
  return (
  <div className="relative top--20 wrapper grid grid-cols-1">
    <div className="flex flex-col items-center justify-center  gap-8 relative">
    {/* <h1 className="font-bold text-3xl md:text-5xl text-[#163020]">Unleashing Intelligent Potential:<p className="text-[#304D30]">Empower Your Business with Cutting-Edge AI SaaS Solutions</p></h1> */}
     <div className="">

     {/* <Button size="lg" asChild className="w-fit">
              <Link href="/explore">
                Explore Now
              </Link>
    </Button> */}

   
     {/* {user ? 
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
    } */}
     </div>
    </div>
     
          {/* image */}
    </div>

  );
};

export default Body;
