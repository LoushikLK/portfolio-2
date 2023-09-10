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
              Hey there! I{"'"}m a full-stack Web Developer from India, and I
              {"'"}ve been on an exciting rollercoaster of learning and creation
              since around 2021, constantly fueled by my enthusiasm for building
              cool stuff.
            </h3>
            <h3 className="font-semibold tracking-wide text-gray-400">
              These days, I{"'"}m all about crafting digital experiences that
              are open to everyone and cater to a wide range of client needs.
              Over time, I{"'"}ve had the awesome opportunity to dive into
              various projects and fine-tune my skills in technologies like
              JavaScript, TypeScript, Go, Python, MongoDB, Firebase, and more.
            </h3>
            <h3 className="font-semibold tracking-wide text-gray-400">
              But wait, there{"'"}s more! I don{"'"}t just stop at creating
              websites that work smoothly. I{"'"}m also deeply passionate about
              making sure they{"'"}re easy for everyone to use, regardless of
              their abilities. Whether it{"'"}s tweaking a bit of code or
              architecting an entire REST API, I love the challenge of making
              things work seamlessly. Speaking of challenges, I{"'"}m a firm
              believer in seeking out new ones. That{"'"}s why I{"'"}m always on
              the lookout for fresh opportunities to stretch my skills and
              knowledge. My portfolio showcases some of the awesome projects I
              have done – watch them below.
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
