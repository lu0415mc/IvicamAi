import Image from "next/image";
import React from "react";

const Nomessages = ({label}:any) => {

  return (
  <div className="flex flex-col h-full items-center justify-center space-y-2 mt-5">
    <div>
        <Image src="./nomessages.svg" className="" width={400} height={400} alt="no messages" />
    </div>
    <p className="text-[#163020] text-3xl font-bold ">{label}</p>
  </div>
  );
};

export default Nomessages;
