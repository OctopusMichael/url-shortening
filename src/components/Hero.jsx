import React from "react";
import Image from "next/image";
import ilustration  from "../images/illustration-working.svg"

const Hero = () => {
  return (
    <section className="">
      <div className="hero-section ">
        <div className="  items-center md:items-start order-2 lg:order-1  lg:w-3/6 flex flex-col gap-[20px] md:gap-[0px]  text-center md:text-start">
          <h1 className=" font-bold text-[40px] leading-[40px] md:text-[80px] md:leading-[100px]"> More than just shorter links</h1>
          <p className="md:text-[20px] md:pe-[100px] text-newGray ">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="md:text-[22px]  md:mt-[45px] rounded-full w-[190px] h-[55px] font-bold bg-cyan hover:bg-teal-300 text-white">
            Get Started
          </button>
        </div>
        <div className="order-1 lg:order-2  lg:w-3/6   md:mt-[-50px]   md:h-[500px]">
           
              <Image
            className="w-full h-full "
              priority={true}
              src={ilustration}
              width={100}
              height={100}
              alt="img"
            />
           

        </div>
      </div>
    </section>
  );
};

export default Hero;
