import { Github, ProjectFile, VisitLink } from "@/assets/icons";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="w-full custom-container pb-8 ">
      <div className="w-full grid grid-cols-9  mx-auto gap-4 ">
        <div className="flex flex-col items-center justify-center gap-4 p-4 w-full col-span-3 bg-gray-800 rounded-sm ">
          <div className="flex w-full items-center justify-between gap-8">
            <ProjectFile className="font-medium tracking-wide text-4xl  transition-all ease-in-out duration-300 text-theme" />
            <div className="flex items-center flex-wrap gap-4">
              <Link target={"_blank"} href="www.github.com">
                <Github className="font-medium tracking-wide text-xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
              </Link>
              <Link target={"_blank"} href="www.lkcodes.netlify.app">
                <VisitLink className="font-medium tracking-wide text-xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
          <h3 className="font-semibold tracking-wide text-left w-full text-xl ">
            Lorem ipsum dolor sit amet s.
          </h3>
          <p className="font-medium tracking-wider text-gray-400 text-sm pl-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dicta
            id vero magnam totam quae!
          </p>
          <div className="flex items-left w-full flex-wrap gap-4 pl-1 ">
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              VS Code
            </h3>
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              Sublime Text
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 w-full col-span-3 bg-gray-800 rounded-sm ">
          <div className="flex w-full items-center justify-between gap-8">
            <ProjectFile className="font-medium tracking-wide text-4xl  transition-all ease-in-out duration-300 text-theme" />
            <div className="flex items-center flex-wrap gap-4">
              <Link target={"_blank"} href="www.github.com">
                <Github className="font-medium tracking-wide text-xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
              </Link>
              <Link target={"_blank"} href="www.lkcodes.netlify.app">
                <VisitLink className="font-medium tracking-wide text-xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
          <h3 className="font-semibold tracking-wide text-xl ">
            Lorem ipsum dolor sit amet s.
          </h3>
          <p className="font-medium tracking-wider text-gray-400 text-sm pl-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dicta
            id vero magnam totam quae!
          </p>
          <div className="flex items-left w-full flex-wrap gap-4 pl-1 ">
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              VS Code
            </h3>
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              Sublime Text
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 w-full col-span-3 bg-gray-800 rounded-sm ">
          <div className="flex w-full items-center justify-between gap-8">
            <ProjectFile className="font-medium tracking-wide text-4xl  transition-all ease-in-out duration-300 text-theme" />
            <div className="flex items-center flex-wrap gap-4">
              <Link target={"_blank"} href="www.github.com">
                <Github className="font-medium tracking-wide text-xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
              </Link>
              <Link target={"_blank"} href="www.lkcodes.netlify.app">
                <VisitLink className="font-medium tracking-wide text-xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
          <h3 className="font-semibold tracking-wide text-xl ">
            Lorem ipsum dolor sit amet s.
          </h3>
          <p className="font-medium tracking-wider text-gray-400 text-sm pl-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dicta
            id vero magnam totam quae!
          </p>
          <div className="flex items-left w-full flex-wrap gap-4 pl-1 ">
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              VS Code
            </h3>
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              Sublime Text
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4 w-full col-span-3 bg-gray-800 rounded-sm ">
          <div className="flex w-full items-center justify-between gap-8">
            <ProjectFile className="font-medium tracking-wide text-4xl  transition-all ease-in-out duration-300 text-theme" />
            <div className="flex items-center flex-wrap gap-4">
              <Link target={"_blank"} href="www.github.com">
                <Github className="font-medium tracking-wide text-xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
              </Link>
              <Link target={"_blank"} href="www.lkcodes.netlify.app">
                <VisitLink className="font-medium tracking-wide text-xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
          <h3 className="font-semibold tracking-wide text-xl ">
            Lorem ipsum dolor sit amet s.
          </h3>
          <p className="font-medium tracking-wider text-gray-400 text-sm pl-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dicta
            id vero magnam totam quae!
          </p>
          <div className="flex items-left w-full flex-wrap gap-4 pl-1 ">
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              VS Code
            </h3>
            <h3 className="font-medium tracking-wide text-xs text-gray-500">
              Sublime Text
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center pt-8 justify-center">
        <Link
          href={"https://github.com/LoushikLK"}
          target="_blank"
          className="btn-primary"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;
