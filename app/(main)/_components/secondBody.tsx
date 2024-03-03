import { TextGenerateEffect } from "@/components/created_components/text-effect";
import Image from "next/image";


const SecondBody = () => {
    return <div className="flex flex-col bg-black h-min px-3 md:px-5 lg:px-8">
        <div className="flex pt-8 pb-5 justify-center items-center flex-col gap-3">

        <h1 className="hidden md:flex text-4xl font-bold text-slate-200">
            Go beyond basic chat - have meaningful interactions with AI
        </h1>
            <span className="hidden md:flex text-slate-400">"Engaging in the best chat experience is enhanced with IvicamAI's innovative technology, fostering meaningful interactions and valuable conversations."</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-8 mb-12">
        
               

              <Image width={500} height={500} alt="" src="https://img.freepik.com/free-photo/person-working-with-floating-screens_23-2150417064.jpg?t=st=1709466909~exp=1709470509~hmac=325226ed4a6fdc836d671405eb566d51def03e8e591c833f2daaf54f81e4279e&w=740" className="rounded-lg" />
              
             
            <TextGenerateEffect words={
"Revolutionize customer service with seamless AI-user integration, leveraging our AI-powered SaaS platform to enhance workflow efficiency and elevate customer satisfaction. Empower your team with intelligent automation and insightful data analysis, delivering meaningful interactions and unparalleled support to drive business success."} />;
          
            
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-8 mb-12">
        
            <Image width={500} height={500} alt="" src="/code.png" className="rounded-lg"/>

              <TextGenerateEffect words={

"Empower your development team with our cutting-edge AI-driven code generation SaaS solution, streamlining software development processes and accelerating project delivery. Harness the power of machine learning algorithms to automate tedious coding tasks, ensuring clean, efficient code and enabling your team to focus on innovation and creativity."




} />;
            
          
            
        
        </div>
    </div>;
};

export default SecondBody;
