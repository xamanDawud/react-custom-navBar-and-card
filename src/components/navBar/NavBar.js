import React from "react";
import DisplayNavBar from "../DisplayNavBar/DisplayNavBar";
import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const NavBar = () => {
  let items = [
    { id: 1, menu: "Home", path: "/home" },
    { id: 2, menu: "About", path: "/about" },
    { id: 3, menu: "Blog", path: "/blog" },
    { id: 4, menu: "Contact", path: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-600 p-6">
      <div
        onClick={() => setOpen(!open)}
        className="w-8 h-8 md:hidden mt-[-12px]"
      >
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex justify-center md:mt-0 bg-gray-600 duration-500 ease-in ${
          open ? "mt-5px" : "mt-[-150px]"
        }`}
      >
        {items.map((nav) => (
          <DisplayNavBar key={nav.id} items={nav}></DisplayNavBar>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
