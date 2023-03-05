"use client";

import { useEffect, useRef } from "react";

const renderMatrix = (ref: any) => {
  let canvas = ref.current;
  let context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops: any[] = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const render = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F0"; // pure green
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      // randomize the string of characters to render
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  return () => {
    setInterval(render, 100);
  };
};

const MatrixRainingLetters = () => {
  const ref = useRef<any>(null);
  useEffect(() => renderMatrix(ref));

  return (
    <div className="bg-gray-900 h-screen w-screen absolute top-0 left-0 z-30">
      <canvas ref={ref} />
    </div>
  );
};

export default MatrixRainingLetters;
