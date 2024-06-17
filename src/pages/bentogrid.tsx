import { cn } from "@/components/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SavingsIcon from '@mui/icons-material/Savings';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import GroupIcon from '@mui/icons-material/Group';

export default function BentoGridDemo() {
  return (
    <>    
    {/* <ParticlesComponent/> */}
    <BentoGrid className="max-w-4xl mx-auto md:mt-[100px] lg:mt-[400px]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            i === 3 || i === 6
              ? "md:col-span-2"
              : "border-10 border-transparent transition-colors duration-300 hover:border-blue-500"
          }
        />
      ))}
    </BentoGrid>
    </>

  );
}



const items = [
  {
    title: "Efficiency Bookings",
    description:
      "Our intuitive interface makes booking accommodations and managing travel expenses a breeze, allowing you to focus on what matters most – your business.",
      header: <BookmarkIcon style={{color:"#EF6A08" , fontSize:"150"}} />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transparency Reports",
    description:
      "With detailed expense reports and travel tracking features, you'll have full visibility into your business travel expenses, making it easier to budget and plan ahead.",
      header:  <ReceiptLongIcon style={{color:"#EF6A08" , fontSize:"150"}} />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cost-Savings",
    description:
      "Save time and money with our efficient booking system and data-driven insights, helping you optimize your accommodation expenses without compromising on quality.",
      header: <SavingsIcon style={{color:"#EF6A08" , fontSize:"150"}} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Reliability",
    description:
      "We prioritize reliability and accuracy in all our services, ensuring that your bookings are secure and your data is handled with utmost confidentiality.",
      header: <PlagiarismIcon style={{color:"#EF6A08" , fontSize:"150"}} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personalized Service",
    description:
      "Our tailored solutions cater to the unique requirements of each business, providing personalized assistance and support every step of the way.",
      header: <GroupIcon style={{color:"#EF6A08" , fontSize:"150"}} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
