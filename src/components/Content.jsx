"use client";

import React, { useState } from "react";
import Image from "next/image";

import brandImage from "../images/icon-brand-recognition.svg";
import recordImage from "../images/icon-detailed-records.svg";
import customImage from "../images/icon-fully-customizable.svg";

const Content = () => {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url == "") {
      setError(true);
    } else {
      const fetchUrl = async () => {
        try {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${url}`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await res.json();

          const links = {
            id: Date.now(),
            original: data.result.original_link,
            new: data.result.short_link,
            copy: false,
          };

          setNewUrl([links, ...newUrl]);
        
          setUrl("");
          setError(false);
          form.reset();
        } catch (error) {
          console.error("error fetching");
          setError(true);
        }
      };

      fetchUrl();
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCopy = (data, id) => {
    navigator.clipboard.writeText(data);
    const upgrade = newUrl.map((element) =>
      element.id === id
        ? {
            ...element,
            copy: !element.copy,
          }
        : element
    );

    setNewUrl(upgrade);
  };

  return (
    <section className="bg-contentBg">
      <div className=" relative max-w-[1440px] mx-auto  h-auto px-[30px] py-[120px]  md:px-[170px]  md:py-[120px] ">
        <div
          id="bg-short"
          className=" absolute top-[-80px] inset-0 bg-darkViolet  h-[170px] w-[85%] md:w-[77%] mx-auto flex justify-center items-center rounded-lg "
        >
          <form
            id="form"
            onSubmit={handleSubmit}
            className="flex md:flex-row flex-col px-8 py-2 gap-2 md:py-5 md:px-16 md:gap-5 w-full relative "
          >
            <input
              onChange={handleChange}
              placeholder="shorten a link here..."
              className={`${
                error
                  ? "border-[2px] border-solid border-red-700 text-red-700 "
                  : " text-newGray "
              }  ps-[20px] md:ps-[40px] h-[50px] md:h-[65px] rounded-lg   w-full text-[14px] md:text-[20px]  `}
              type="text"
            />
            {error && (
              <p className="text-red-700 md:absolute md:top-[100px]">
                Please add a link{" "}
              </p>
            )}

            <button className="bg-cyan font-bold text-white text-[20px] h-[50px] md:h-[65px]  rounded-lg w-full md:w-[240px]   hover:bg-teal-300">
              Shorten It!
            </button>
          </form>
        </div>
        {newUrl &&
          newUrl.map((element) => {
            return (
              <div
                key={element.id}
                className=" gap-3  py-[20px] h-auto md:h-[70px]  px-[20px] mx-auto mt-[20px]  flex md:flex-row flex-col  justify-between items-start md:items-center rounded-lg bg-white text-black "
              >
                <p className="text-black text-start">{element.original}</p>
                <div className="flex flex-col w-full md-w-auto  md:flex-row  items-start   md:items-center gap-2 md:gap-10">
                  <p className="text-cyan ">{element.new}</p>
                  <button
                    onClick={() => handleCopy(element.new, element.id)}
                    className={` ${
                      element.copy ? "bg-darkViolet " : "bg-cyan "
                    } w-full md:w-[100px]  h-auto md:h-[50px] text-bold hover:hover:bg-teal-300 text-white p-2 rounded-lg`}
                  >
                    {element.copy ? "copied!" : "copy"}
                  </button>
                </div>
              </div>
            );
          })}
        <div className="flex flex-col gap-3 text-center mt-[50px] md:mt-[80px]">
          <h1 className=" text-[28px] md:text-[40px] font-bold">
            Advanced Statistics
          </h1>
          <p className=" md:text-[20px] text-[18px]  text-grayViolet">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[100px] md:gap-10 mt-[150px] relative ">
          <div className="md:w-full absolute top-0 inset-[48%] md:inset-0 md:top-[160px] bg-cyan md:h-[10px] z-0 w-[10px] h-full   flex" />

          <article className="articles md:mt-0 h-[300px]">
            <div className="bg-darkViolet rounded-full absolute w-[90px] h-[90px] top-[-45px] inset-[35%] md:inset-[10%]  md:top-[-45px] flex justify-center items-center ">
              <Image
                className="w-[40px] h-auto"
                src={brandImage}
                alt="brand logo"
                width={50}
                height={50}
                priority={true}
              />
            </div>
            <h1 className="font-bold">Brand Recognition</h1>
            <p className="text-grayViolet">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className="articles md:mt-[50px] h-[300px]">
            <div className="bg-darkViolet rounded-full absolute w-[90px] h-[90px] top-[-45px] inset-[35%] md:inset-[10%]  md:top-[-45px] flex justify-center items-center">
              <Image
                className="w-[40px] h-auto"
                src={recordImage}
                alt="brand logo"
                width={50}
                height={50}
                priority={true}
              />
            </div>
            <h1 className="font-bold">Detailed Records</h1>
            <p className="text-grayViolet">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="articles md:mt-[100px] h-[300px]">
            <div className="bg-darkViolet rounded-full absolute w-[90px] h-[90px] top-[-45px] inset-[35%] md:inset-[10%]   md:top-[-45px] flex justify-center items-center ">
              <Image
                className="w-[40px] h-auto"
                src={customImage}
                alt="brand logo"
                width={50}
                height={50}
                priority={true}
              />
            </div>
            <h1 className="font-bold">Fully Customizable</h1>
            <p className="text-grayViolet">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Content;
