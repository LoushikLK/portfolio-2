import { MobileNav, Navbar } from "@/components/header";
import { navLink } from "@/config";
import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Loushik Dev",
  description:
    "Hi! I am Loushik. I am a fullstack developer from India. Join me on my journey as a developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#051009] min-h-screen  text-white w-full overflow-hidden overflow-y-auto relative ">
        <MobileNav />
        <header className=" flex flex-col items-center justify-center relative   ">
          <Navbar />
          <div className="w-full  items-center justify-between custom-container hidden lg:flex absolute py-4  top-0 z-[999] ">
            {/* <div className="h-20 w-20 overflow-hidden relative ">
              <Image
                src={
                  "https://lkcodes.netlify.app/static/media/aboutimg.e0f07ba3.JPG"
                }
                alt="Loushik"
                fill
                className="h-20 w-20 object-contain overflow-hidden relative"
              />
            </div> */}
            <h1 className="text-theme font-semibold text-4xl">Loushik.dev</h1>
            <nav className="flex items-center gap-6">
              {navLink?.map((item) => (
                <Link
                  href={item?.path}
                  key={item?.label}
                  className="text-theme border-b border-transparent hover:border-theme transition-all ease-in-out duration-300 font-medium tracking-wide text-base"
                >
                  {item?.label}
                </Link>
              ))}
              <a href="/resume.pdf" download className="btn-primary">
                Resume
              </a>
            </nav>
          </div>
        </header>
        {children}

        <footer className="w-full ">
          <div className="flex items-center"></div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 gap-4 bg-gray-900 ">
            <span className="flex items-center gap-2 ">
              <h3 className="font-medium tracking-wide text-sm">Made with</h3>
              <h3 className="font-medium tracking-wide text-sm animate-pulse ">
                ❤️
              </h3>
              <h3 className="font-medium tracking-wide text-sm">by</h3>
              <h3 className="font-medium tracking-wide text-theme animate-pulse text-sm">
                Loushik
              </h3>
            </span>
            <span className="hidden md:flex">|</span>
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
