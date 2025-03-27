"use client";

import React, { useState, useEffect } from "react";
import { IoIosColorFill, IoMdColorFill } from "react-icons/io";
import { FaEye, FaRegEye, FaBorderStyle } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { Codebtn } from "./index";

function Page2Icons() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`main-container w-full flex text-[#252423] ${
         windowWidth < 867 ? "flex-col gap-6 px-6" : windowWidth < 1024 ? "justify-start px-10" : "justify-center gap-40"
      }`}
    >
      <div className={`main-left-container flex ${windowWidth < 1024 ? 'justify-between w-full' : 'justify-center'}`}>
        <div className="flex gap-10 font-mono">
          <div className="left-container flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <FaEye className="text-2xl" />
              <p className="text-sm">eyeSize</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoIosColorFill className="text-2xl" />
              <p className="text-sm">eyeColor</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineColumnWidth className="text-2xl" />
              <p className="text-sm"> eyeGap</p>
            </div>
          </div>
          <div className="right-container flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <FaRegEye className="text-2xl" />
              <p className="text-sm">pupilSize</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdColorFill className="text-2xl" />
              <p className="text-sm">pupilColor</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaBorderStyle className="text-2xl" />
              <p className="text-sm">borderWidth</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`main-right-container flex flex-col gap-4 border-l-1 border-[#252423] ${
          windowWidth < 867 ? "border-none" : windowWidth < 1024 ? "w-full" : "w-1/3"
        }`}
      >
        <p className={`text-lg font-roobert ${windowWidth < 867 ? 'pl-0' : 'pl-20'}`}>
          Dimension-js (/dɪˈmɛn.ʃən/) is a lightweight JavaScript animation
          library with a simple, yet powerful API. It works with CSS properties,
          SVG, DOM attributes and JavaScript Objects.
        </p>

        <Codebtn />
      </div>
    </div>
  );
}

export default Page2Icons;
