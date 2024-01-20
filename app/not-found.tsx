"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = ()=>{
    return(
        <div className="h-full flex flex-col items-center justify-center space-y-5 ">
            <Image src="/error-image.svg" height={300} width={500}  alt="error" />
            <h2 className="text-red-600 dark:text-red-400 text-3xl">Something went wrong</h2>
            <Link href="/">
            <Button>Go back</Button>
            </Link>


        </div>
    );
}
export default Error;