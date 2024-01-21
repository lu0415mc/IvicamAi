"use client"
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageSquare, MessageSquareMore, Music, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreCard = () => {
  return (
    <div className="pt-20 px-3 md:px-5 lg:px-8">

        <h1 className="text-5xl font-bold text-center pt-5 pb-5">Explore Our AI Tools</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] bg-[#3E3232]/10 transition duration-300 ease-in-out ">
          <Link href="/code">
            <CardHeader className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-[#3E3232]">
                Code Generation
              </Button>
            </CardHeader>
            <div className="flex items-center justify-center aspect-square text-[#3E3232] hover:scale-150 transition duration-300 ease-in-out">
<svg width="100" height="100" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
          </Link>
        </Card>
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] bg-red-900/10 transition duration-300 ease-in-out ">
          <Link href="/music">
            <CardHeader className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-red-900">
                Music Generation
              </Button>
            </CardHeader>
            <div className="flex items-center justify-center aspect-square text-red-900 hover:scale-150 transition duration-300 ease-in-out">
                <Music className="w-[100px] h-[100px]" />
            </div>
          </Link>
        </Card>
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] bg-[#FF9800]/10 transition duration-300 ease-in-out ">
          <Link href="/video">
            <CardHeader className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-[#FF9800]">
                Video Generation
              </Button>
            </CardHeader>
            <div className="flex items-center justify-center aspect-square text-[#FF9800] hover:scale-150 transition duration-300 ease-in-out">
                <Video className="w-[100px] h-[100px]" />
            </div>
          </Link>
        </Card>
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] bg-green-700/10 transition duration-300 ease-in-out ">
          <Link href="/image">
            <CardHeader className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-green-700">
                Image Generation
              </Button>
            </CardHeader>
            <div className="flex items-center justify-center aspect-square text-green-700 hover:scale-150 transition duration-300 ease-in-out">
                <svg width="100" height="100" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
          </Link>
        </Card>
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] bg-orange-700/10 transition duration-300 ease-in-out ">
          <Link href="/conversation">
            <CardHeader className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-orange-700">
                Conversation
              </Button>
            </CardHeader>
            <div className="flex items-center justify-center aspect-square text-orange-700 hover:scale-150 transition duration-300 ease-in-out">
                <MessageSquareMore className="w-[100px] h-[100px]" />
            </div>
          </Link>
        </Card>
            </div>


  </div>);
};

export default ExploreCard;
