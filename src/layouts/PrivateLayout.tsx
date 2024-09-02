import { Blog, Dashboard, Message, Tech, Work } from "@/assets/icons";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  children: JSX.Element;
  title?: string;
};

const navBar = [
  {
    key: "1",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: (
      <Dashboard className="text-3xl  text-theme group-hover:text-white transition-all duration-300 ease-in-out " />
    ),
  },
  {
    key: "2",
    label: "Blog",
    path: "/admin/blog",
    icon: (
      <Blog className="text-3xl  text-theme group-hover:text-white transition-all duration-300 ease-in-out " />
    ),
  },
  {
    key: "3",
    label: "Expertise",
    path: "/admin/expertise",
    icon: (
      <Tech className="text-3xl  text-theme group-hover:text-white transition-all duration-300 ease-in-out " />
    ),
  },
  {
    key: "4",
    label: "Work",
    path: "/admin/work",
    icon: (
      <Work className="text-3xl  text-theme group-hover:text-white transition-all duration-300 ease-in-out " />
    ),
  },
  {
    key: "5",
    label: "Message",
    path: "/admin/message",
    icon: (
      <Message className="text-3xl  text-theme group-hover:text-white transition-all duration-300 ease-in-out " />
    ),
  },
];

const PrivateLayout = ({ children, title = "Admin" }: Props) => {
  const [largeNav, setLargeNav] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <main className={`min-h-screen bg-[#051009] text-white relative ml-16`}>
          <header className={`h-16 bg-gray-800`}>
            <div className="flex h-16 items-center justify-between px-4">
              <h3 className="lg:text-xl text-sm uppercase lg:block font-semibold text-white">
                Welcome Admin
              </h3>
              <div className="flex items-center gap-6">
                <button className="cursor-pointer text-lg btn-primary  font-medium tracking-wide ">
                  Logout
                </button>
              </div>
            </div>
          </header>
          <div className="  w-full">{children}</div>
          <div
            className={`min-h-screen bg-gray-800 transition-all ease-in-out duration-300 fixed left-0 top-0 ${
              largeNav ? "w-60" : " w-16"
            }  `}
            onMouseEnter={() => setLargeNav(true)}
            onMouseLeave={() => setLargeNav(false)}
          >
            <h3 className="font-semibold tracking-wide text-lg border-b text-center w-full p-4 text-theme">
              LK
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              {navBar?.map((item) => (
                <span
                  className="w-full flex items-center px-4 gap-4 py-2 bg-gray-800 group transition-all duration-300 ease-in-out hover:bg-theme/50 cursor-pointer icon-hover"
                  key={item?.key}
                  onClick={() => router.push(item?.path)}
                >
                  <span className="w-fit">{item?.icon}</span>

                  <h3
                    className={`font-medium tracking-wide text-theme text-left group-hover:text-white overflow-hidden transition-all duration-300 ease-in-out ${
                      largeNav ? "w-[10rem]" : "w-0"
                    } `}
                  >
                    {item?.label}
                  </h3>
                </span>
              ))}
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default PrivateLayout;
