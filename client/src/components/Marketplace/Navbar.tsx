import React from "react";
import FarmMateLogo from "../../../public/FarmMate.png";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { fontrye } from "@/app/layout";
import { Input } from "@/components/ui/input";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-100 w-screen fixed z-10 top-0 left-0 px-20 py-1 h-15">
      <div className="flex items-center justify-between">
        <p className={`text-xl font-rye-regular ${fontrye}`}>Farm Mate</p>
        <Image src={FarmMateLogo} alt="FarmMate Logo" width={50} height={50} />
      </div>
      <div className="h-max w-full flex-1 items-center justify-center flex">
        <div className="relative w-max flex items-center justify-center">
          <Search
            size={23}
            className="absolute top-0 left-0 right-0 bottom-0 my-auto pl-2 text-gray-500"
          />
          <Input
            type="text"
            placeholder="Search for plants, seeds fertilizers etc"
            className="focus:outline w-[600px] focus:outline-1 focus:outline-green-800 py-4 px-8"
          />
        </div>
      </div>
      <div className="relative flex justify-end items-center gap-5">
        <div>
          <User size={18} />
        </div>
        <div className="bg-teal-900 text-[#FFF6F4] p-0.5 h-4 w-4 -top-3 -right-3 flex items-center justify-center rounded-full text-xs absolute">
          <p className="text-[10px]">1</p>
        </div>
        <ShoppingCart size={16} />
      </div>
    </nav>
  );
}

export default Navbar;
