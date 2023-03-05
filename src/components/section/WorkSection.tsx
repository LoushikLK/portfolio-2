import { Github, ProjectFile, VisitLink } from "@/assets/icons";
import { PROJECT_DATA } from "@/data";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="w-full custom-container pb-8 ">
      <div className="w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9  mx-auto gap-4 ">
        {PROJECT_DATA?.map((item) => (
          <div
            className="flex flex-col items-center justify-center gap-4 p-4 w-full col-span-3 bg-gray-800 rounded-sm "
            key={item?.key}
          >
            <div className="flex w-full items-center justify-between gap-8">
              <ProjectFile className="font-medium tracking-wide text-4xl  transition-all ease-in-out duration-300 text-theme" />
              <div className="flex items-center flex-wrap gap-4">
                {item?.githubLink ? (
                  <Link target={"_blank"} href={item?.githubLink}>
                    <Github className="font-medium tracking-wide text-xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
                  </Link>
                ) : null}
                {item?.websiteLink ? (
                  <Link target={"_blank"} href={item?.websiteLink}>
                    <VisitLink className="font-medium tracking-wide text-xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
              <h3 className="font-semibold tracking-wide text-left w-full text-xl ">
                {item?.title}
              </h3>
              <p className="font-medium tracking-wider text-gray-400 text-sm pl-1">
                {item?.description}
              </p>
            </div>
            <div className="flex items-left w-full flex-wrap gap-4 pl-1 ">
              {item?.tooling?.map((text) => (
                <h3
                  className="font-medium tracking-wide text-xs text-gray-500"
                  key={text}
                >
                  {text}
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center pt-8 justify-center  ">
        <Link
          href={"https://github.com/LoushikLK"}
          target="_blank"
          className="btn-primary relative "
        >
          <div className="animate-ping border-theme border absolute top-0 left-0 h-full w-full rounded-md  "></div>
          View More
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;
