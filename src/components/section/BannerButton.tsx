"use client";

import { arrowDown } from "@/assets/animation";
import Link from "next/link";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: arrowDown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BannerButton = () => {
  return (
    <Link href={"/#about"} className="absolute bottom-10 ">
      <Lottie options={defaultOptions} height={80} width={80} />
    </Link>
  );
};

export default BannerButton;
