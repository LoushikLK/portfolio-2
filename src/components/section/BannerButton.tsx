"use client";

import { useEffect, useRef } from "react";
import { arrowDown } from "@/assets/animation";
import Link from "next/link";

const BannerButton = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      let animation: any;
      import("lottie-web").then((lottie) => {
        animation = lottie.default.loadAnimation({
          container: container.current!,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: arrowDown,
        });
      });
      return () => animation?.destroy();
    }
  }, []);

  return (
    <Link href={"/#about"} className="absolute md:bottom-10 bottom-20 ">
      <div ref={container} style={{ height: 80, width: 80 }} />
    </Link>
  );
};

export default BannerButton;
