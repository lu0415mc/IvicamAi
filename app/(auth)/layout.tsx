import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IvicamAi|Login|Register",
  description: "Unlock the power of AI, unlock your business potential with IvicamAi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <main className="min-h-full bg-[#DEDEDE] flex items-center justify-center ">
      {children}
    </main>

  );
}
