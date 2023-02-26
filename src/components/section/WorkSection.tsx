import { Github, VisitLink } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="w-full custom-container pb-8 " id="about">
      <div className="w-full  ">
        <div className="flex items-center w-full py-8 gap-6">
          <h3 className="font-semibold tracking-wide text-3xl min-w-fit text-theme">
            03. Some Things I’ve Built
          </h3>
          <span className="w-full h-[1px] bg-theme/20"></span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 p-8 max-w-5xl relative ">
          <div className="h-[25rem] w-[50rem] overflow-hidden relative "></div>
          <div className="h-[25rem] w-[35rem] overflow-hidden absolute z-40 left-0 ">
            <Image
              src={"/profile.jpg"}
              alt="Loushik"
              fill
              className="h-[25rem] w-[35rem] object-cover overflow-hidden relative"
            />
          </div>

          <div className="flex flex-col items-end justify-items-end relative z-50 gap-8 ">
            <div className="flex flex-col items-end gap-4">
              <h3 className="font-medium text-base text-theme tracking-wide">
                Featured Project
              </h3>
              <h3 className="font-semibold text-white tracking-wide text-3xl">
                Halcyon Theme
              </h3>
            </div>
            <h3 className="p-6 shadow-xl font-semibold text-gray-400 bg-gray-900 rounded-sm tracking-wide text-right">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </h3>
            <div className="flex items-center flex-wrap gap-4">
              <h3 className="font-medium tracking-wide text-sm text-gray-400">
                VS Code
              </h3>
              <h3 className="font-medium tracking-wide text-sm text-gray-400">
                Sublime Text
              </h3>
            </div>
            <div className="flex items-center flex-wrap gap-4">
              <Link target={"_blank"} href="www.github.com">
                <Github className="font-medium tracking-wide text-2xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
              </Link>
              <Link target={"_blank"} href="www.lkcodes.netlify.app">
                <VisitLink className="font-medium tracking-wide text-2xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
