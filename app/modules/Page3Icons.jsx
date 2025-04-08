"use client";

import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

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
          <div className={`flex gap-14 ${windowWidth < 375 ? 'flex-wrap' : windowWidth < 1024 ? 'w-full justify-start' : ''}`}>
        <div className="html cursor-pointer group">
          <a href="https://github.com/Krishna-32/Dimensions.js" target='_blank' className="flex flex-col items-center gap-2">
           <FaHtml5
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
            />
            <p
              className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
            >
              HTML
            </p>
          </a>
        </div>

        <div className="css cursor-pointer group">
          <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className="flex flex-col items-center gap-2">
            <FaCss3
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              CSS
            </p>
          </a>
        </div>

        <div className="js cursor-pointer group">
          <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className="flex flex-col items-center gap-2">
           <FaJs
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              JS
            </p>
          </a>
        </div>

        <div className="react cursor-pointer group">
          <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className="flex flex-col items-center gap-2">
            <FaReact
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs text-[#f6f4f2] group-hover:text-[#f74f4d] transition-all duration-300'
              >
              React
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
          Dimension-js is a lightweight JavaScript library that provides smooth scrolling and other animation effects for your web applications. The library is built with HTML, CSS, JS and React and is designed to be easy to use and integrate into your projects.
        </p>

        <Codebtn text="Use this code in your project" />
      </div>
    </div>
  );
}

export default Icons;
