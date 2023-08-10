import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full custom-container " id="about">
      <div className="w-full  ">
        <div className="flex items-center w-full py-8 gap-6">
          <h3 className="font-semibold tracking-wide text-xl lg:text-3xl min-w-fit text-theme">
            01. About Me
          </h3>
          <span className="w-full h-[1px] bg-theme/20"></span>
        </div>

        <div className="w-full flex items-start  gap-8 flex-col-reverse pb-20 lg:flex-row justify-center md:justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-wide text-gray-400">
          I am a dedicated full-stack Web Developer based in India, driven by a relentless passion for acquiring knowledge and constructing innovative creations. My profound interest in software development ignited in 2021, catalyzing my journey of skill acquisition and growth
            </h3>
            <h3 className="font-semibold tracking-wide text-gray-400">
            Over time, I've completed numerous projects, resulting in high-quality websites. My project portfolio encompasses a range of technologies, including HTML5, CSS3, JavaScript, ReactJS, NodeJS, MongoDB, Bootstrap, Express, REST API, and even React Native. I possess a proactive mindset, always seeking fresh opportunities to tackle. A selection of my projects is displayed below.
            </h3>
        
          </div>

          <div className=" w-full lg:w-fit h-full flex justify-center relative">
            <div className="lg:h-[18rem] h-[20rem] w-[20rem] lg:w-[20rem] overflow-hidden relative rounded-lg z-[55] ">
              <Image
                src={"/profile.jpg"}
                alt="Loushik"
                fill
                className="h-[18rem] w-[20rem] object-cover overflow-hidden rounded-lg z-[55] relative"
                loading="lazy"
              />
            </div>
            <div className="h-[18rem] w-[20rem] border-theme border-2 rounded-lg absolute top-5 left-5 hidden lg:flex"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
