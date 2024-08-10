import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fontrye } from "@/app/layout";


function Navbar() {
  return (
    <header className="px-20  py-4 fixed z-10 top-0 w-full bg-slate-100 flex items-center">
      <div className="flex items-center justify-between">
        <p className={`text-xl ${fontrye}`}>Farm Mate</p>
        <Image src={'/FarmMate.png'} alt="FarmMate Logo" width={50} height={50} />
      </div>
      <div className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <Link href="/" className="text-[#0F4C36]">
          Home
        </Link>
        <Link href="/marketplace" className="text-[#0F4C36]">
          Marketplace
        </Link>
        <Link href="/kisansathi" className="text-[#0F4C36]">
          Kisaan Saathi
        </Link>
        <Link href="/" className="text-[#0F4C36]">
          Kissan's pookie
        </Link>
      </div>

      <div className="flex items-center justify-between gap-2">
        <input
          className="border-2 border-gray-300 bg-white px-4 w-max min-w-40 py-2 rounded-3xl text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search for plants seeds, fertilizers etc."
        />
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/auth/sign-in"
            className="px-4 py-2 bg-teal-800 text-white rounded-lg"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="px-4 py-2 text-teal-800 border border-teal-800/70 rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
