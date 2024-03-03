"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/sparkarles";
import {  useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";


export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/premium-vector/conceptual-technology-illustration-artificial-intelligence_118331-105.jpg?w=1380",
    "https://img.freepik.com/free-photo/3d-render-techno-background-with-male-figure-coding-design_1048-13266.jpg?w=740&t=st=1709449268~exp=1709449868~hmac=8cbc01bc63e41c8dd2b79da82672b3c4377b59343549707d98f6f9fc5c0ecb6f",
    "https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150714247.jpg?w=826&t=st=1709449099~exp=1709449699~hmac=afe500abbcd2349748321c19ca881a7e5038c1545db61c2a60116bd83556a5f9",
  ];
  const {isSignedIn,isLoaded} = useAuth();
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 20,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-7xl text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400 py-4  text-green-400">
          Unlock Business Intelligence <br/> with AI-Powered SaaS
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-emerald-500/10">
          {
            isLoaded && isSignedIn ? (
              <Link href="/Dashboard">Dashboard →</Link>
            ):(<Link href="/sign-up">Sign Up →</Link>)
          }
          
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
