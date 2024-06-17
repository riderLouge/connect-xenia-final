import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import imageSrc from "../../assets/SBE.png";
import Lottie from "lottie-react";
import animation1 from "../../assets/hotelBook.json"
import animation2 from "../../assets/extensiveBooking.json"
import animation3 from "../../assets/bookingCal.json"
import animation4 from "../../assets/report.json"
import animation5 from "../../assets/expense.json"
import animation6 from "../../assets/userManagement.json"
import animation7 from "../../assets/CS.json"



export default function TabsDemo() {
  const tabs = [
    {
      title: "Seamless Booking Experience",
      value: "seamlessBookingExperience",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Seamless Booking Experience</p>
          <DummyContent1 />

        </div>
      ),
    },
    {
      title: "Extensive Hotel Network",
      value: "extensiveHotelNetwork",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Extensive Hotel Network</p>
          <DummyContent2 />
          
        </div>
      ),
    },
    {
      title: "Comprehensive Travel Tracking",
      value: "comprehensiveTravelTracking",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Comprehensive Travel Tracking</p>
          <DummyContent3 />

        </div>
      ),
    },
    {
      title: "Customized Reporting",
      value: "customizedReporting",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Customized Reporting</p>
          <DummyContent4 />

        </div>
      ),
    },
    {
      title: "Expense Management Made Easy",
      value: "expenseManagementMadeEasy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Expense Management Made Easy</p>
          <DummyContent5 />

        </div>
      ),
    },
    {
      title: "Optimised User Management",
      value: "optimisedUserManagement",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>Optimised User Management</p>
          <DummyContent6 />

        </div>
      ),
    },
    {
      title: "24/7 Customer Support",
      value: "customerSupport",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black">
          <p>24/7 Customer Support</p>
          <DummyContent7 />

        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem] perspective-1000px relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">With ConnectXenia, booking accommodations for your business travel needs has never been easier. Our platform offers a user-friendly interface where you can effortlessly search for and book hotels at the best prices available.</p>
        <Lottie animationData={animation1}/>
     </div>
  );
};
const DummyContent2 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">Gain access to a vast network of hotels worldwide, ensuring that you find the perfect accommodation for every business trip, meeting, or event.</p>
        <Lottie animationData={animation2}/>
    </div>
  );
};
const DummyContent3 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">Keep track of all your business travel details in one centralized location. From booking confirmations to travel itineraries, ConnectXenia provides you with the tools you need to stay organized and informed every step of the way.</p>
        <Lottie animationData={animation3}/>
    </div>
  );
};
const DummyContent4 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">Our app generates comprehensive reports based on your booking history, allowing you to track expenses, analyse trends, and make informed decisions.</p>
          <Lottie animationData={animation4}/>
    </div>
  );
};
const DummyContent5 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">With ConnectXenia, bid farewell to the hassle of manual expense management. Our platform automates expense tracking by generating detailed reports based on your bookings. This ensures transparency and accuracy in your expense management process.</p>
        <Lottie animationData={animation5}/>

    </div>
  );
};
const DummyContent6 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">Effortlessly manage multiple user accounts within our app. Customize access levels, track expenses, and streamline approval processes with ease.</p>
        <Lottie animationData={animation6}/>

    </div>
  );
};
const DummyContent7 = () => {
  return (
    <div className="relative h-[30%] md:h-[45%] mt-8">
        <p className="text-white font-normal text-sm md:text-base">Our dedicated support team is available round- the-clock to assist you with any queries or concerns. Rest assured, we are here to ensure a smooth and hassle-free experience.</p>
        <Lottie animationData={animation7}/>

    </div>
  );
};

