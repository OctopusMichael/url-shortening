"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(!menuToggle);
  };
  const menu = [
    {
      title: "Features",
    },
    {
      title: "Pricing",
    },
    {
      title: "Resources",
    },
  ];

  return (
    <section>
      <nav className=" items-center pt-[35px] px-[30px] md:px-[170px] flex flex-row justify-between max-w-[1440px] mx-auto  relative  ">
        <div className="flex flex-row gap-10 items-center">
          <a href="#">
            {" "}
            <Image
              className="w-[120px] h-auto"
              priority={true}
              src={logo}
              width={100}
              height={100}
              alt="img"
            />{" "}
          </a>
          <ul className="md:flex md:flex-row gap-10 hidden">
            {menu.map((element, index) => (
              <li key={index}>
                <a
                  className="hover:text-slate-900 text-slate-400 font-bold"
                  href="#"
                >
                  {" "}
                  {element.title}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex md:flex-row gap-2 hidden ">
          <button className=" w-[100px] h-[40px] rounded-3xl hover:border hover:border-slate-700">
            Login
          </button>
          <button className="bg-cyan  rounded-3xl w-[100px] h-[40px]  text-white font-bold hover:bg-teal-300">
            Sign up
          </button>
        </div>

        <button
          onClick={handleClick}
          className="text-slate-900 text-[20px]  md:hidden "
        >
          {" "}
          <FaBars />{" "}
        </button>

        {menuToggle && (
          <div className="absolute  w-[90%]  h-auto  bg-darkViolet text-white flex flex-col gap-3 top-[90px] left-[5%] rounded-xl p-[30px]  ">
            <ul className="text-center flex flex-col gap-5 ">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <hr />
            <div className="flex flex-col gap-3 ">
              <button className="hover:bg-teal-300 w-full rounded-full h-[50px]">
                Login
              </button>
              <button className="bg-cyan hover:bg-teal-300 w-full rounded-full h-[50px]">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;

/* 

Features
Pricing
Resources

Login
Sign Up */
