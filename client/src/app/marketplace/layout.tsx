import Navbar from "@/components/Marketplace/Navbar";
import { SideBar } from "@/components/Marketplace/SideBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen">
      <Navbar />
      <div className="flex items-start justify-start w-full h-full px-20 gap-10 pt-20">
        <SideBar />
        <main className="flex-1 flex items-start justify-start ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default layout;
