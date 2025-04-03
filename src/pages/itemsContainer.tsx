import React from "react";
import Item from "./items";
import Image from "next/image";
import connectxeniaLogo from "../../assets/ConnectXenia Final Files/Connectxenia-final-logo-png.png";

const ItemsContainer = () => {

  const SUPPORT = [
    { name: "Home", link: "#" },
    { name: "Our Features", link: "#features" },
    { name: "Contact Us", link: "#contact" },
  ];
  // grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
  // text-center pt-2 text-gray-400 text-sm pb-8
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-6 sm:px-8 px-5 py-16 ">
      <div className="relative w-2/3 h-20 ml-14">
      <Image src={connectxeniaLogo} alt="ConnectXenia Logo" layout="fill" objectFit="contain" style={{backgroundColor:"white", borderRadius:"10px",padding:"2px"}}/>
      </div>
      <div className="p-4  bg-black ">
        <h2 className="text-lg font-bold text-orange-400">Yukra Private Limited</h2>
        <p className=" text-white">The Old Casino</p>
        <p className=" text-white">28 Fourth Avenue, Hove, East Sussex, United Kingdom, BN3 2PJ</p>
        <p className=" text-white">Tel: 01273 739592</p>
      </div>
      <div className="col-span-1 flex justify-center sm:ml-10">
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
    </div>
  );
};

export default ItemsContainer;
