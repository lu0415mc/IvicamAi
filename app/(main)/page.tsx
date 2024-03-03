"use client"
import { useEffect, useState } from "react";
import Body from "./_components/Body";
import ExploreCard from "./_components/ExploreCard";
import Footer from "./_components/Footer";
import MainNavbar from "./_components/MainNavbar";

import SecondBody from "./_components/secondBody";
import { ImagesSliderDemo} from "@/components/created_components/Doodle";

export default function Home() {
    const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }


  return (
    <>
      <MainNavbar/>
    <div className="bg-black">
      <ImagesSliderDemo/>
      {/* <Body/> */}
    </div>
      <ExploreCard/>
      <SecondBody/>
      <Footer/>
    </>

  );
}
