"use client"

import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8 pt-10 pb-10 bg-black">
        <h1 className="text-[#DEDEDE] text-center font-bold text-5xl">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] transition duration-300 ease-in-out">
          <Link href="/image">
            <div className="relative aspect-square">
              <Image fill alt="" src="/image.png" />
            </div>
            <CardFooter className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-red-700">
                Image Generation
              </Button>
            </CardFooter>
          </Link>
        </Card>

        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] transition duration-300 ease-in-out">
          <Link href="/video">
            <div className="relative aspect-square">
              <Image fill alt="" src="/video.png" />
            </div>
            <CardFooter className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-green-900">
                Video Generation
              </Button>
            </CardFooter>
          </Link>
        </Card>

        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] transition duration-300 ease-in-out">
          <Link href="/code">
            <div className="relative aspect-square">
              <Image fill alt="" src="/code.png" />
            </div>
            <CardFooter className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-violet-700">
                Code Generation
              </Button>
            </CardFooter>
          </Link>
        </Card>

        <Card className="rounded-lg overflow-hidden hover:shadow-[#DEDEDE] transition duration-300 ease-in-out">
          <Link href="/music">
            <div className="relative aspect-square">
              <Image fill alt="" src="/music.jpg" />
            </div>
            <CardFooter className="p-2">
              <Button variant="ghost" className="w-full text-xl font-bold text-blue-700">
                Music Generation
              </Button>
            </CardFooter>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Products;