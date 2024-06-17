"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { BackgroundGradient } from "../components/ui/background-gradient";
import React, { useState, useRef } from "react";
import { cn } from "@/components/utils/cn";

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl bg-black mx-auto z-50",
        className
      )}
      style={{ marginTop: "20px", borderRadius: "50px" }}
    >
      <BackgroundGradient>
        <Menu setActive={setActive}>
          <button onClick={() => handleScrollTo(headerRef)} className="text-white">
            Home
          </button>
          <button onClick={() => handleScrollTo(tabsRef)} className="text-white">
            Our Features
          </button>
          <button onClick={() => handleScrollTo(placeholderRef)} className="text-white">
            Contact Us
          </button>
        </Menu>
      </BackgroundGradient>
    </div>
  );
}


