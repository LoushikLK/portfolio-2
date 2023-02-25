"use client";

import { Menu } from "@/assets/icons";
import { navLink } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [viewMenu, setViewMenu] = useState(false);

  const handleClickMenu = () => {
    setViewMenu(!viewMenu);
  };
  const handleBlurMenu = () => {
    setViewMenu(false);
  };

  return (
    <div className="flex lg:hidden items-center justify-between relative p-2 w-full border-b border-gray-500/40 z-[999] ">
      <div className="h-10 w-10 overflow-hidden relative ">
        <Image
          src={"https://lkcodes.netlify.app/static/media/aboutimg.e0f07ba3.JPG"}
          alt="Loushik"
          fill
          className="h-10 w-10 object-contain overflow-hidden relative"
        />
      </div>
      <button
        className="flex items-center"
        onClick={handleClickMenu}
        onBlur={handleBlurMenu}
      >
        <Menu className="text-theme text-2xl cursor-pointer focus:ring-1 ring-theme " />
      </button>
      <div
        className={`w-full max-w-[90%] bg-[#051009] absolute transition-all ease-in-out duration-300 top-[3.7rem] right-0 min-h-screen ${
          viewMenu ? "translate-x-0" : "translate-x-[101%]"
        } `}
      >
        <nav className=" flex flex-col w-full">
          {navLink?.map((item) => (
            <Link
              href={item?.path}
              key={item?.label}
              className="w-full p-2 hover:bg-theme text-theme hover:text-white text-sm font-medium tracking-wide transition-all ease-in-out duration-300 "
            >
              {item?.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
