"use client";
import React from "react";
import dynamic from 'next/dynamic';
import Header from "../pages/header";
import Hero from "../pages/hero";
import Body from "../pages/body";
import BentoGrid from "../pages/bentogrid";
import Tabs from "../pages/tabs";
import MovingCards from "../pages/movingCard";
import Placeholder from "../pages/placeholderVanish";
import StickyScroll from "../pages/stickyScroll";
import Footer from "@/pages/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import GlobeDemo from "@/pages/globeAnimation";
import Lottie from "lottie-react";
import scrollDown from "../../assets/ScrollDown1.json"
import Navbar from "../pages/navbar";


const Router = dynamic(
  () => import('react-router-dom').then(mod => mod.BrowserRouter),
  { ssr: false }
);

const Page1: React.FC = () => {
  return (
    <div style={{backgroundColor:"black" }}>
      <Router>
        <div>
          <Navbar/>
          <Hero />
          <div style={{paddingTop:"250px"}}>
            <div className=" inset-0 flex items-center justify-center ">
              <div className="text-customOrange">Scroll</div>
            </div>   
            <div className=" inset-0 flex items-center justify-center ">
               <Lottie animationData={scrollDown} className="w-12" /> 
            </div>   
          </div>    
        </div> 
        <Body />
        <div className=" inset-0 flex items-center justify-center ">
        <div className="text-2xl md:text-4xl mx-auto font-semibold text-white dark:text-white p-10">
          Booking across the globe with <span className="text-customOrange">ConnectXenia</span>
        </div>
        </div>   
        <video 
          src={require('../../public/globe2.mp4')} 
          autoPlay 
          muted 
          loop 
          playsInline 
          disablePictureInPicture 
          controls={false} 
          preload="auto" 
          style={{ width: '100%', height: 'auto' , marginBottom:"20px"}} 
        />
        <div style={{backgroundColor:"black"}}>
          <StickyScroll />
          <Tabs />
          <div style={{paddingTop:"50px"}}>
            <MovingCards />
          </div> 
          <Footer />
        </div>        
        <BackgroundBeams />
      </Router>
    </div>
  );
};

export default Page1;
