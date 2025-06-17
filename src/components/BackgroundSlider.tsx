"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Slide = {
  image: string;
};

type BackgroundSliderProps = {
  slides: Slide[];
  interval?: number;
  children?: ReactNode;
  className?: string;
};

export default function BackgroundSlider({
  slides,
  interval = 5000,
  children,
  className,
}: BackgroundSliderProps) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [index, interval, slides.length]);

  return (
    <div
      className={classNames(
        className,
        "relative w-full h-full overflow-hidden"
      )}
    >
      {/* Previous image fading out */}
      <motion.div
        key={`prev-${prevIndex}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
      />

      {/* Current image fading in */}
      <motion.div
        key={`current-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

{
  /* Overlay Text */
}
{
  /* <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
  <motion.h1
    key={`title-${index}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-bold mb-4"
  >
    {slides[index].title}
  </motion.h1>

  <motion.p
    key={`desc-${index}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-lg md:text-2xl max-w-2xl"
  >
    {slides[index].description}
  </motion.p> */
}
