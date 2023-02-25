import { MobileNav, Navbar } from "@/components/header";
import { navLink } from "@/config";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Loushik Dev",
  description: "Portfolio website of loushik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#051009] min-h-screen ">
        <header className="w-full flex flex-col items-center justify-center relative ">
          <Navbar />
          <MobileNav />
          <div className="w-full  items-center justify-between custom-container hidden lg:flex ">
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
      </body>
    </html>
  );
}
