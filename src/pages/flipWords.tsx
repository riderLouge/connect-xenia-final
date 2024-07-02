import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["seamless booking,", "real-time tracking", "insightful reporting"];

  return (
    <div className="h-[15rem] flex justify-center items-center px-4">
      <div className="text-2xl md:text-4xl mx-auto font-semibold text-customOrange dark:text-customOrange">
        Experience
        <FlipWords words={words} /> <br />
        for smarter business decisions
      </div>
    </div>
  );
}
