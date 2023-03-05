"use client";

import { Menu } from "@/assets/icons";
import { navLink } from "@/config";
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
    <div className="flex lg:hidden items-center justify-between   border-b border-gray-500/40 z-[999] w-full sticky top-0  ">
      <div className="w-full flex bg-gray-900 justify-between items-center p-2 z-[999] relative">
        {/* <div className="h-10 w-10 overflow-hidden relative  ">
          <Image
            src={
              "https://lkcodes.netlify.app/static/media/aboutimg.e0f07ba3.JPG"
            }
            alt="Loushik"
            fill
            className="h-10 w-10 object-contain overflow-hidden relative"
          />
        </div> */}
        <h1 className="text-theme font-semibold text-4xl">Loushik</h1>
        <button
          className="flex items-center"
          onClick={handleClickMenu}
          onBlur={handleBlurMenu}
        >
          <Menu className="text-theme text-2xl cursor-pointer focus:ring-1 ring-theme " />
        </button>
      </div>
      <div
        className={`w-full  bg-[#051009] absolute transition-all ease-in-out duration-300 top-0 z-[998] left-0 min-h-full pb-4 border-b border-b-theme ${
          viewMenu ? "translate-y-[3.5rem]" : "-translate-y-[101%]"
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
          <a href="/resume.docx" download className="btn-primary !w-fit !ml-2">
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
