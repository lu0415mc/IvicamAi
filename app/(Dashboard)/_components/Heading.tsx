import { cn } from "@/lib/utils";
import React from "react";
interface HeadingProps {
    Title:string,
    descrption:string,
    Icon:any,
    bg_color:string,
    color:string

}
const Heading = ({Title, descrption,Icon,bg_color,color}:HeadingProps) => {
  return( 
  <div className="p-3 ">
    <div className={cn("p-2 mt-5 flex gap-4 w-fit rounded-lg ",bg_color)}>

    <div className={cn("flex items-center p-2 rounded-md", color,bg_color)}>
                    {Icon}
    </div>
    <div className="flex flex-col">

    <h1 className="font-bold">{Title}</h1>
    <p>{descrption}</p>
    </div>
    </div>
  </div>);
};

export default Heading;
