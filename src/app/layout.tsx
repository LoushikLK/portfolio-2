import { MobileNav, Navbar } from "@/components/header";
import { navLink } from "@/config";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Loushik Dev",
  description: "Portfolio website of loushik",
};

const socialLink = [
  {
    title: "Github",
    url: "https://github.com/LoushikLK",
  },
  {
    title: "LinkedIn",
    url: "https://in.linkedin.com/in/loushik-kumar-giri-a65a54215",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/LoushikGiri1",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/god____of___thunder/",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#051009] min-h-screen  text-white w-screen overflow-y-auto overflow-x-hidden ">
        <header className=" flex flex-col items-center justify-center relative  ">
          <Navbar />
          <MobileNav />
          <div className="w-full  items-center justify-between custom-container hidden lg:flex absolute left top-0 z-[999] ">
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
        </header>
        {children}
        <footer className="w-full ">
          <div className="flex items-center"></div>

          <div className="w-full flex items-center justify-center p-4 gap-4 bg-gray-900 ">
            <span className="flex items-center gap-2 ">
              <h3 className="font-medium tracking-wide text-sm">Made with</h3>
              <h3 className="font-medium tracking-wide text-sm animate-pulse ">
                ❤️
              </h3>
              <h3 className="font-medium tracking-wide text-sm">by</h3>
              <h1 className="font-medium tracking-wide text-theme animate-pulse text-sm">
                Loushik
              </h1>
            </span>
            |
            <h3 className="font-medium tracking-wide text-sm">
              © copyright {new Date().getFullYear()} Loushik. All right
              reserved.
            </h3>
          </div>
        </footer>
      </body>
    </html>
  );
}
