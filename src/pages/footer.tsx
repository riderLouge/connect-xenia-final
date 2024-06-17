import React from "react";
import ItemsContainer from "./itemsContainer";
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';

const Footer = () => {
  const Icons = [
    { icon: logoFacebook, link: "#" },
    { icon: logoTwitter, link: "#" },
    { icon: logoLinkedin, link: "#" },
    { icon: logoInstagram, link: "#" },
  ];

  return (
    <footer className="bg-black text-black mt-44" id="footer">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-orange-400 py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
           Get in Touch with us!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-gray-700 hover:bg-black duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Help
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="text-orange-400">
          {Icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={icon.icon} style={{ color: "white" }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
