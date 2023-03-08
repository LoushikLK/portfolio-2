import { Delete, Edit, Github, VisitLink } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ item }: { item: any }) => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-4 py-4 md:p-8 max-w-5xl relative ">
      <div className="h-[25rem] w-[50rem] hidden lg:flex overflow-hidden relative "></div>
      <div className="h-[25rem] w-[35rem] hidden lg:flex overflow-hidden absolute backdrop-blur-sm rounded-md blur-[1px]  z-40 left-0 ">
        <Image
          src={item?.image}
          alt="Loushik"
          fill
          className="h-[25rem] w-[35rem] object-cover overflow-hidden relative"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-start lg:items-end justify-items-end relative z-50 gap-8 ">
        <div className="flex flex-col items-start lg:items-end gap-4">
          <h3 className="font-medium text-base text-theme tracking-wide">
            Featured Project
          </h3>
          <h3 className="font-semibold text-white tracking-wide text-3xl">
            {item?.title}
          </h3>
        </div>
        <h3 className="p-6 shadow-xl font-semibold text-gray-400 bg-gray-900 rounded-sm tracking-wide text-left lg:text-right">
          {item?.description}
        </h3>
        <div className="flex items-center flex-wrap gap-4">
          {item?.tooling?.map((text: string) => (
            <h3
              className="font-medium tracking-wide text-sm text-gray-400"
              key={text}
            >
              {text}
            </h3>
          ))}
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {item?.githubLink ? (
            <Link target={"_blank"} href={item?.githubLink}>
              <Github className="font-medium tracking-wide text-2xl hover:text-theme transition-all ease-in-out duration-300 text-gray-400" />
            </Link>
          ) : null}
          {item?.websiteLink ? (
            <Link target={"_blank"} href={item?.websiteLink}>
              <VisitLink className="font-medium tracking-wide text-2xl hover:text-theme text-gray-400 transition-all ease-in-out duration-300" />
            </Link>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <button className=" cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2 text-blue-500 pr-4 ">
            <Edit />
            <h3 className="font-medium tracking-wide text-base">Edit</h3>
          </button>
          <button className=" cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2 text-red-500 pr-4 ">
            <Delete />
            <h3 className="font-medium tracking-wide text-base">Delete</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
