/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      id: 1,
      text: "Login",
      url: "/login",
      className:
        "bg-primary-800 hover:bg-white py-2 px-4 rounded-lg text-white",
    },
  ];

  return (
    <div className="bg-primary-700 text-primary-950 flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-palm-leaf rounded-b-lg animate-fade-down backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="pl-5 flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={60} />
        <h1 className="font-bold text-lg">Dashboard Sapit</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex place-items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`ml-10 rounded-md font-semibold cursor-pointer duration-300 hover:text-secondary-400 hover:underline hover:underline-offset-2 capitalize ${
              item.className || ""
            }`}
          >
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div onClick={handleNav} className="lg:hidden flex place-items-center">
        <button
          type="button"
          className="text-pale-spring-bud bg-camo-green hover:bg-dark-yello font-medium rounded-md text-sm px-5 py-2 cursor-pointer duration-300"
        >
          Menu
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed lg:hidden left-0 top-0 w-[50%] h-screen bg-pale-spring-bud ease-in-out duration-500"
            : "ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%] "
        }
      >
        {/* Mobile Logo */}
        <div className="my-5 grid justify-items-center">
          <Image src="/images/logo.png" alt="Logo" width={70} height={60} />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`grid justify-items-center text-palm-leaf p-4 font-semibold hover:bg-dark-yello hover:text-pale-spring-bud duration-200 cursor-pointer capitalize ${
              item.className || ""
            }`}
          >
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
