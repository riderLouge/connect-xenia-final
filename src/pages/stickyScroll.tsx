"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SavingsIcon from '@mui/icons-material/Savings';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FlipWordsDemo from "./flipWords";
import { SparklesCore } from "@/components/ui/sparkles";
const content = [
  {
    title: "Efficient Bookings",
    description:
      "Our intuitive interface makes booking accommodations and managing travel expenses a breeze, allowing you to focus on what matters most – your business.",
    content: (
        <BookmarkBorderIcon style={{color:"#EF6A08" , fontSize:"150"}} />
    ),
  },
  {
    title: "Transparency Reports",
    description:
      "With detailed expense reports and travel tracking features, you'll have full visibility into your business travel expenses, making it easier to budget and plan ahead.",
    content: (
        <ReceiptLongIcon style={{color:"#EF6A08" , fontSize:"150"}} />
    ),
  },
  {
    title: "Cost-Savings",
    description:
      "Save time and money with our efficient booking system and data-driven insights, helping you optimize your accommodation expenses without compromising on quality.",
    content: (
        <SavingsIcon style={{color:"#EF6A08" , fontSize:"150"}} />
    ),
  },
  {
    title: "Reliability",
    description:
      "We prioritize reliability and accuracy in all our services, ensuring that your bookings are secure and your data is handled with utmost confidentiality.",
    content: (
        <VpnLockIcon style={{color:"#EF6A08" , fontSize:"150"}} />
    ),
  },
  {
    title: "Personalized Service",
    description:
      "Our tailored solutions cater to the unique requirements of each business, providing personalized assistance and support every step of the way.",
    content: (
        <PeopleOutlineIcon style={{color:"#EF6A08" , fontSize:"150"}} />
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
        <></>
    ),
  },

];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10 ">
      <FlipWordsDemo/>
      <StickyScroll content={content} />
    </div>
  );
}
