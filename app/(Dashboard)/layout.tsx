import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "IvicamAi|Dashboard",
  description: "Unlock the power of AI, unlock your business potential with IvicamAi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed  z-[80] bg-[#DEDEDE]">
        <Sidebar/>
        </div>


    <main className="md:pl-72">
        <Navbar/>
      {children}
    </main>
    </div>

  );
}
