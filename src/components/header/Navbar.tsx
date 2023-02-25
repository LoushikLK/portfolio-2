"use client";

import { navLink } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [viewNav, setViewNav] = useState(false);

  useEffect(() => {
    const handleEventListener = () => {
      if (window.scrollY > 60) {
        setViewNav(true);
      } else {
        setViewNav(false);
      }
    };

    window.addEventListener("scroll", handleEventListener);

    return () => {
      window.removeEventListener("scroll", handleEventListener);
    };
  }, []);

  if (viewNav)
    return (
      <div className=" hidden w-full lg:flex items-center justify-center fixed animate-nav top-0  bg-gradient-to-t backdrop-blur-[2px] from-[#05100900] to-black/10 ">
        <div className="w-full flex items-center justify-between custom-container  b ">
          <div className="h-20 w-20 overflow-hidden relative ">
            <Image
              src={
                "https://lkcodes.netlify.app/static/media/aboutimg.e0f07ba3.JPG"
              }
              alt="Loushik"
              fill
              className="h-20 w-20 object-contain overflow-hidden relative"
            />
          </div>
          <nav className="flex items-center gap-6">
            {navLink?.map((item) => (
              <Link
                href={item?.path}
                key={item?.label}
                className="text-theme font-medium tracking-wide text-base"
              >
                {item?.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );

  return null;
};

export default Navbar;
