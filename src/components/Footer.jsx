import React from "react";
import Image from "next/image";
import logoInvertido from "../images/logoInvertido.svg";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-veryDarkViolet">
      <footer className="  md:text-start flex flex-col md:flex-row max-w-[1440px] mx-auto justify-between items-center md:items-start text-center px-30 md:px-[170px] py-[50px] md:py-[100px">
        <div className="my-[50px] md:my-[0px]" >
          <a href="#">
            {" "}
            <Image
              className="w-[100px] h-auto"
              priority={true}
              src={logoInvertido}
              width={100}
              height={100}
              alt="imgFooter"
            />{" "}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-[80px] ">
          <ul className="flex flex-col  gap-2">
            <li className="text-white font-bold ">
             
                Features
            
            </li>
            <li>
              <a href="#"> Link Shortening</a>
            </li>
            <li>
              <a href="#"> Branded Links</a>
            </li>
            <li>
              <a href="#"> Analytics</a>
            </li>
          </ul>
          <ul className="flex flex-col  gap-2">
            <li className=" text-white font-bold ">
              Resources
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="flex flex-col  gap-2">
            <li className="text-white font-bold ">
              Company
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex flex-row gap-5 text-[24px] text-white ">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
