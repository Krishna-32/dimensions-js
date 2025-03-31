"use client";

import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { HiOutlineCode } from "react-icons/hi";
import { GiRamProfile } from "react-icons/gi";
import { Codebtn } from "./index";

function Icons() {
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
      className={`main-container w-full flex text-[#f6f4f2] ${
         windowWidth < 903 ? "flex-col gap-6 px-6" : windowWidth < 1024 ? "justify-start px-10" : "justify-center gap-20"
      }`}
    >
      <div className={`main-left-container flex ${windowWidth < 1024 ? 'justify-between w-full' : 'justify-end'}`}>
        <div className="flex gap-10 font-mono">
          {/* <div className="left-container flex flex-col gap-4">
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
          </div> */}
          <div className={`flex gap-5 ${windowWidth < 375 ? 'flex-wrap' : windowWidth < 1024 ? 'w-full justify-start' : ''}`}>
        <div className="github cursor-pointer group">
          <a href="https://github.com/Krishna-32/Dimensions.js" className="flex flex-col items-center gap-2">
           <IoLogoGithub
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
            />
            <p
              className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
            >
              Github
            </p>
          </a>
        </div>

        <div className="docs cursor-pointer group">
          <a href="https://dimension-js.vercel.app/documentation" className="flex flex-col items-center gap-2">
            <BiCodeCurly
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              Documentation
            </p>
          </a>
        </div>

        <div className="code cursor-pointer group">
          <a href="https://dimension-js.vercel.app/examples" className="flex flex-col items-center gap-2">
           <HiOutlineCode
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              Examples
            </p>
          </a>
        </div>

        <div className="portfolio cursor-pointer group">
          <a href="https://mainpf-studio.vercel.app/" className="flex flex-col items-center gap-2">
            <GiRamProfile
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              Portfolio
            </p>
          </a>
        </div>
      </div>
        </div>
      </div>

      <div
        className={`main-right-container flex flex-col gap-4 border-l-1 border-[#f6f4f2] ${
          windowWidth < 903 ? "border-none" : windowWidth < 1024 ? "w-full" : "w-1/3"
        }`}
      >
        <p className={`text-lg font-roobert ${windowWidth < 903 ? 'pl-0' : 'pl-20'}`}>
          Dimension-js (/dɪˈmɛn.ʃən/) is a lightweight JavaScript library that provides ready-to-use animation components. Simply import the animations you need and customize them through props to create engaging interactive experiences in your web applications.
        </p>

        <Codebtn text="Getting Started" />
      </div>
    </div>
  );
}

export default Icons;
