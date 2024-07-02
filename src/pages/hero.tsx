"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HeroHighlightDemo() {
  return (
    // <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        style={{ paddingTop: "200px" }}
      >
        From Booking to Boardroom!<br/>
        Your All-in-One
        <Highlight className="text-black dark:text-white">
        Business Stay Solution.
        </Highlight>

      </motion.h1>
    // </HeroHighlight>
  );
}
