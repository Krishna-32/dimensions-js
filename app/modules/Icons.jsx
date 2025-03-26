"use client";

import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { HiOutlineCode } from "react-icons/hi";
import { GiRamProfile } from "react-icons/gi";

function Icons() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update width on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        windowWidth < 773 ? "flex-col gap-6 px-10" : "flex-row"
      } w-full flex items-start justify-center`}
    >
      <div className="flex gap-6">
        <div className="github cursor-pointer group">
          <span className="flex flex-col items-center gap-2">
            <IoLogoGithub
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
            />
            <p
              className='font-mono text-xs group-hover:text-gray-400 transition-all duration-300'
            >
              Github
            </p>
          </span>
        </div>

        <div className="docs cursor-pointer group">
          <span className="flex flex-col items-center gap-2">
            <BiCodeCurly
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs group-hover:text-gray-400 transition-all duration-300'
              >
              Docs
            </p>
          </span>
        </div>

        <div className="code cursor-pointer group">
          <span className="flex flex-col items-center gap-2">
            <HiOutlineCode
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs group-hover:text-gray-400 transition-all duration-300'
              >
              Code
            </p>
          </span>
        </div>

        <div className="portfolio cursor-pointer group">
          <span className="flex flex-col items-center gap-2">
            <GiRamProfile
              className='text-4xl group-hover:-translate-y-2 transition-all duration-300'
              />
              <p
                className='font-mono text-xs group-hover:text-gray-400 transition-all duration-300'
              >
              Portfolio
            </p>
          </span>
        </div>
      </div>

      <div
        className={`flex items-center justify-center ${
          windowWidth > 1024
            ? "border-l-2 border-gray-300 pl-10 ml-10 w-1/4"
            : windowWidth > 773
            ? "border-l-2 border-gray-300 pl-10 ml-10 w-1/3"
            : "w-full"
        }`}
      >
        <p className="text-lg font-roobert">
          Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library
          with a simple, yet powerful API. It works with CSS properties, SVG,
          DOM attributes and JavaScript Objects.
        </p>
      </div>
    </div>
  );
}

export default Icons;
