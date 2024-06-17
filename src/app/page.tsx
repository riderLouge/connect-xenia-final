"use client"
import React from "react";
import Header from "../pages/header";
import Hero from "../pages/hero";
import Body from "../pages/body";
import BentoGrid from "../pages/bentogrid";
import Tabs from "../pages/tabs";
import MovingCards from "../pages/movingCard";
import Placeholder from "../pages/placeholderVanish";
import StickyScroll from "../pages/stickyScroll"
import Footer from "@/pages/footer";
import Navbar from "@/pages/navBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import  GlobeDemo  from "@/pages/globeAnimation";
import { BrowserRouter as Router } from "react-router-dom";


const Page1: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black"}}>
      <Router>
        <Navbar/>
        <Hero />
        <div style={{paddingTop:"170px"}}>
          <Body  />
        </div>
        <GlobeDemo/>
        <StickyScroll/>
        <Tabs />
        <MovingCards />
        <Footer/>
        <BackgroundBeams />
      </Router>
    </div>
  );
};

export default Page1;
