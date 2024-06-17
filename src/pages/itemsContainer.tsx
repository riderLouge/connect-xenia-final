import React from "react";
import Item from "./items";
import Image from "next/image";
import connectxeniaLogo from "../../assets/ConnectXenia Final Files/Connectxenia-final-logo-png.png";

const ItemsContainer = () => {

  const SUPPORT = [
    { name: "Home", link: "#" },
    { name: "Our Features", link: "#" },
    { name: "About Us", link: "#" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 ">
      <div className="relative w-2/3 h-28 ml-12">
        <Image src={connectxeniaLogo} alt="ConnectXenia Logo" layout="fill" objectFit="contain" />
      </div>
      <div className="p-4  bg-black ml-10">
        <h2 className="text-lg font-bold text-orange-400">Yukra Projects Private Limited</h2>
        <p className=" text-white">The Old Casino</p>
        <p className=" text-white">28 Fourth Avenue, Hove, East Sussex, United Kingdom, BN3 2PJ</p>
        <p className=" text-white">Tel: 01273 739592</p>
      </div>
      <div className="col-span-1 flex justify-center">
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
    </div>
  );
};

export default ItemsContainer;
