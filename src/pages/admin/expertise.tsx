import {
  Docker,
  Expressjs,
  Javascript,
  Mongodb,
  Nextjs,
  Nodejs,
  ReactIcon,
  Typescript,
} from "@/assets/icons";
import { CreateTooling } from "@/components/admin";
import { ToolingCard } from "@/components/core";
import { PrivateLayout } from "@/layouts";
import { useState } from "react";

const toolingData = [
  {
    title: "React",
    icon: <ReactIcon className="text-theme text-4xl  " />,
  },
  {
    title: "Javascript",
    icon: <Javascript className="text-theme text-4xl  " />,
  },
  {
    title: "Typescript",
    icon: <Typescript className="text-theme text-4xl  " />,
  },
  {
    title: "Nodejs",
    icon: <Nodejs className="text-theme text-4xl  " />,
  },
  {
    title: "Expressjs",
    icon: <Expressjs className="text-theme text-4xl  " />,
  },
  {
    title: "Mongodb",
    icon: <Mongodb className="text-theme text-4xl  " />,
  },
  {
    title: "Nextjs",
    icon: <Nextjs className="text-theme text-4xl  " />,
  },
  {
    title: "Docker",
    icon: <Docker className="text-theme text-4xl  " />,
  },
];

const Expertise = () => {
  const [viewCreateTooling, setViewCreateTooling] = useState(false);
  return (
    <PrivateLayout>
      <div className="w-full custom-container py-4 ">
        <CreateTooling
          view={viewCreateTooling}
          setView={setViewCreateTooling}
        />
        <div className="w-full flex justify-end p-4 bg-gray-800 rounded-md shadow-lg">
          <button
            className="btn-primary"
            onClick={() => setViewCreateTooling(true)}
          >
            Add Skill
          </button>
        </div>
        <div className="w-full flex flex-row flex-wrap mt-8 justify-center gap-2 md:gap-4 py-4 px-1 lg:px-8 lg:py-8 bg-theme/50 rounded-xl ">
          {toolingData?.map((item) => (
            <ToolingCard key={item?.title} item={item} />
          ))}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Expertise;
