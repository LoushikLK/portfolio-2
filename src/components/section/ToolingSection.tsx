import {
  Amazonaws,
  Docker,
  Expressjs,
  Firebase,
  Javascript,
  Mongodb,
  Nextjs,
  Nodejs,
  Python,
  ReactIcon,
  Typescript,
} from "@/assets/icons";

const toolingData = [
  {
    title: "Python",
    icon: <Python className="text-theme text-4xl  " />,
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
    title: "Firebase",
    icon: <Firebase className="text-theme text-4xl  " />,
  },
  {
    title: "React",
    icon: <ReactIcon className="text-theme text-4xl  " />,
  },
  {
    title: "Nextjs",
    icon: <Nextjs className="text-theme text-4xl  " />,
  },
  {
    title: "Docker",
    icon: <Docker className="text-theme text-4xl  " />,
  },
  {
    title: "AWS",
    icon: <Amazonaws className="text-theme text-4xl  " />,
  },
];

const ToolingSection = () => {
  return (
    <section className="w-full custom-container pb-8 " id={"expertise"}>
      <div className="w-full  ">
        <div className="flex items-center w-full py-8 gap-6">
          <h3 className="font-semibold tracking-wide text-xl lg:text-3xl min-w-fit text-theme">
            02. Expertise
          </h3>
          <span className="w-full h-[1px] bg-theme/20"></span>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-2 md:gap-4 py-4 px-1 lg:px-8 lg:py-8 bg-theme/50 rounded-xl ">
        {toolingData?.map((item) => (
          <div
            className="flex items-center w-full xxs:w-[47%] xs:w-auto gap-4 bg-gray-800 p-2 lg:px-4 lg:py-3 rounded-lg md:min-w-[10rem]"
            key={item?.title}
          >
            <div className="flex items-center  ">{item?.icon}</div>
            <h3 className="font-medium tracking-wide  text-sm md:text-lg text-theme/50">
              {item?.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolingSection;
