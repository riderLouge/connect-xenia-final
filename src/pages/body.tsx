"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import imageSrc from "../../assets/macScreen.png";
import Lottie from "lottie-react";
import animation from "../../assets/travel.json"

export default function HeroScrollDemo() {
  return (
    // <HeroHighlight>
      <div className="flex flex-col overflow-hidden mt-24 md:mt-[100px] lg:mt-[100px]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white dark:text-white">
                Travel the world with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-customOrange">
                ConnectXenia
                </span>
              </h1>
            </>
          }
          
        >
        <div >
          <p style={{fontWeight:"bold",color:"black",fontStyle:"italic"}}>Welcome to ConnectXenia</p>
          <p style={{color:"white",fontStyle:"italic"}}>Our cutting-edge corporate accommodation tool is meticulously crafted to cater to the distinct requirements of today’s enterprises. Say goodbye to the hassle of hotel reservations, as ConnectXenia streamlines the process, offering optimal rates and empowering users with invaluable insights through detailed reports.</p>
          <Lottie animationData={animation} className="  w-full h-full"/>
        </div>
        </ContainerScroll>
      </div>
    // </HeroHighlight>
  );
}

