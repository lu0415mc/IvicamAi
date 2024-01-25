'use client';
import { useUser } from "@clerk/nextjs";
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';
import { SingleImageDropzone } from '../../_components/Singleupload';
import { Spinner } from "@/components/created_components/spinner";
import { createUser } from "@/database/actions/create";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Drama } from "lucide-react";
import Heading from "../../_components/Heading";

const SingleImageDropzoneUsage = () => {
  const { user } = useUser();
  const [file1, setFile1] = useState<File>();
  const [photo,setPhoto] = useState('');
  const [file2, setFile2] = useState<File>();
  const [url1, setUrl1] = useState<string[]>([]);
  const [url2, setUrl2] = useState<string[]>([]);
  const { edgestore } = useEdgeStore();
  const router = useRouter();
  const uploadImages = async () => {
    
    try{

  
    if (file1 && file2) {
      const [res1, res2] = await Promise.all([
        edgestore.publicFiles.upload({ file: file1 }),
        edgestore.publicFiles.upload({ file: file2 }),
      ]);

      setUrl1([res1.url]);
      setUrl2([res2.url]);
      
     
      const res = await createUser({ fullname: user?.fullName, email: user?.primaryEmailAddress?.emailAddress, imgUrl: res1.url , targtedimg:res2.url });
      setPhoto(res);
    
      
      router.refresh();
    }
    }catch (error: any) {
      if (error?.response?.status === 403) {
        toast.error("Something went wrong.");
      } else {
        toast.error("Something went wrong.");
      }
    } 
  };
 

  return (
    <div className="pb-10">
       <Heading
        Title="FaceSwap Generation"
        descrption="Change your face to the other person's."
        Icon={<Drama/>}
        color="text-[#0F1035]"
        bg_color="bg-[#0F1035]/10"
      />
    <div className="px-5 mt-10 flex justify-center flex-col items-center md:flex-row gap-10">
 <Card className="flex flex-col items-center justify-center rounded-lg w-[300px] h-[300px]">
      <CardHeader className="font-bold text-red-700 text-2xl">Source/Base image</CardHeader>
      <SingleImageDropzone
      className="bg-[#0F1035]/10"
        width={200}
        height={200}
        value={file1}
        onChange={(file) => {
          setFile1(file);
        }}
        />
        </Card>
         <Card className="flex flex-col items-center justify-center rounded-lg w-[300px] h-[300px]">
      <CardHeader className="font-bold text-red-700 text-2xl">Targeted image</CardHeader>
      <SingleImageDropzone
      className="bg-[#0F1035]/10"
        width={200}
        height={200}
        value={file2}
        onChange={(file) => {
          setFile2(file);
        }}
      />
      </Card>
      

      {/* Log the URLs */}

    </div>
    <div className="mt-5 flex justify-center ">

    <Button 
        onClick={uploadImages}
        className=""
        >
        Upload Images
      </Button>
        </div>
    <div className="grid grid-cols-1 px-5 pt-5 ">
          {photo.length > 0 && (

            <Card className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  fill
                  alt="Generated"
                  src={photo}
                  />
              </div>
              <CardFooter className="p-2">
                <Button onClick={() => window.open(photo)} variant="secondary" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ) 
          }
        </div>
    </div>
  );
};

export default SingleImageDropzoneUsage;
