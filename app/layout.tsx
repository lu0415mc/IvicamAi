import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IvicamAi",
  description: "Unlock the power of AI, unlock your business potential with IvicamAi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
                <EdgeStoreProvider>{children}</EdgeStoreProvider>
        
        </body>
    </html>
  </ClerkProvider>
  );
}
