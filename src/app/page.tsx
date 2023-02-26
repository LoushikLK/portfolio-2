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
        className="w-full  bg-cover bg-center bg-no-repeat  "
        style={{
          backgroundImage: `url(/main-bg.jpg)`,
        }}
        id="#home"
      >
        <div className="w-full min-h-screen h-full flex items-center flex-col gap-8 justify-center bg-gradient-to-t from-black/40  to-black/10 relative ">
          <h3 className="font-semibold text-white tracking-wide text-3xl  ">
            Hi, I'm
          </h3>

          <h1 className="w-full text-center md:text-5xl   lg:text-[8rem] font-extrabold uppercase text-white text- ">
            Loushik
          </h1>

          <h3 className="font-semibold text-white tracking-wide text-3xl uppercase ">
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
