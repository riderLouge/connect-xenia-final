"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewritter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Book",
    },
    {
      text: "Now",
    },
    {
      text: "At",
    },
    {
      text: "ConnectXenia.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-3 ">
      <TypewriterEffectSmooth words={words} />

    </div>
  );
}
