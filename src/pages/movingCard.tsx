"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I travel frequently for work, and I always rely on ConnectXenia to find the best hotels at the best prices. Their 24/7 customer support is exceptional – they're always there to assist me, no matter the time zone. With ConnectXenia, I know I'm in good hands.",
    name: "Sanjay",
    title: "",
  },
  {
    quote:
      "Managing corporate travel for our team has never been easier since we started using ConnectXenia. Their customized reporting tools give us valuable insights into our travel expenses, while their optimized user management system simplifies the entire process. Thanks to ConnectXenia, we can focus on what matters most – our business.",
    name: "Anjali",
    title: "",
  },
  {
    quote: "I've been using ConnectXenia for all my business travel needs, and I couldn't be happier. Their seamless booking experience, extensive hotel network, and comprehensive travel tracking make my trips stress-free and efficient. Highly recommended!",
    name: "Varun",
    title: "",
  },
];
