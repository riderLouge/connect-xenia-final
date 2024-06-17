import React from "react";

const Item = ({ Links, title }:any) => {
  return (
    <ul>
      <h1 className="mb-1 mr-20 font-semibold">{title}</h1>
      {Links?.map((link:any) => (
        <li key={link.name}>
          <a
            className="text-white hover:text-customOrange duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;