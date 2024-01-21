import Image from "next/image";


const SecondBody = () => {
    return <div className="flex flex-col bg-[#DEDEDE] h-min px-3 md:px-5 lg:px-8">
        <div className="flex pt-8 pb-5 justify-center items-center flex-col gap-3">

        <h1 className="text-4xl font-bold">
            Go beyond basic chat - have meaningful interactions with AI
        </h1>
            <span>"Engaging in the best chat experience is enhanced with IvicamAI's innovative technology, fostering meaningful interactions and valuable conversations."</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-8 mb-12">
        
              
              <Image width={500} height={500} alt="" src="/humanai.jpeg" className="rounded-lg" />
              <Image width={500} height={500} alt="" src="/body2img.jpeg" className="rounded-lg"/>
            
          
            
        
        </div>
    </div>;
};

export default SecondBody;
