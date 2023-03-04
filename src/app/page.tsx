import {
  AboutSection,
  BannerButton,
  ContactSection,
  FeatureSection,
  ToolingSection,
  WorkSection,
} from "@/components/section";

export default function Home() {
  return (
    <main className="w-full ">
      {/* =================== main section ========================= */}
      <section
        className="w-full  bg-cover bg-center  bg-no-repeat  "
        style={{
          backgroundImage: `url(/main-bg.webp)`,
        }}
        id="home"
      >
        <div className="w-full min-h-screen h-full flex items-center flex-col gap-8 justify-center bg-gradient-to-t backdrop-blur-[2px] from-black/40  to-black/10 relative ">
          <h3 className="font-semibold text-white tracking-wide text-xl lg:text-3xl  ">
            Hi, I{"'"}m
          </h3>

          <svg height="100%" width="100%">
            <defs>
              <pattern
                id="polka-dots"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle fill="#ffffff" cx="25" cy="25" r="3"></circle>
              </pattern>
            </defs>

            <text
              x="50%"
              y="80%"
              textAnchor="middle"
              className="w-full text-center text-6xl md:text-8xl  lg:text-[8rem] font-extrabold uppercase text-white text-"
            >
              Loushik
            </text>
          </svg>
          {/* <h1 className="w-full text-center md:text-5xl animate-charcter   lg:text-[8rem] font-extrabold uppercase text-white text- ">
            Loushik
          </h1> */}

          <h3 className="font-semibold text-white tracking-wide  text-xl text-center lg:text-3xl uppercase ">
            SOFTWARE ENGINEER, FULL-STACK DEVELOPER.
          </h3>
          <BannerButton />
        </div>
      </section>
      {/* ============================= About section ============================= */}
      <AboutSection />

      {/* ========================= Tooling Section =========================== */}

      <ToolingSection />

      {/* ======================== Featured Section ======================== */}

      <FeatureSection />

      {/* ==================== work section ========================= */}

      <WorkSection />

      {/* =============== contact section ====================== */}

      <ContactSection />
    </main>
  );
}
