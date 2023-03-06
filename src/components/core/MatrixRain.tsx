"use client";

import { useEffect, useRef } from "react";

const MatrixRainingLetters = () => {
  const canvas = useRef<any>(null);
  useEffect(() => {
    const context = canvas.current.getContext("2d");

    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;
    canvas.current.width = width;
    canvas.current.height = height;

    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    // calculate how many 'lines' to show and animate
    const columns = Math.floor(width / 20) + 1;
    const yPositions = Array.from({ length: columns }).fill(0);

    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
      context.fillStyle = "#0001";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "#0f0";
      context.font = "15pt monospace";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        context.fillText(text, x, y);

        if (Number(y) > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = Number(y) + 20;
        }
      });
    };

    const interval = setInterval(matrixEffect, 100);
    return () => {
      clearInterval(interval);
    };
  }, [canvas]);

  return (
    <div className="bg-gray-900 h-screen w-screen absolute top-0 left-0 z-30">
      <canvas ref={canvas} />
    </div>
  );
};

export default MatrixRainingLetters;
