"use client";

import React, { useState, useEffect } from "react";
import { Btn, Footer } from "@/app/modules";

function Page3() {
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
      className={`w-full h-screen flex flex-col gap-20 relative ${
        windowWidth < 1024 ? "items-start" : "items-center"
      }`}
    >
      <div className="font-roobert w-full items-start flex flex-col gap-20">
        <div
          className={`w-full flex flex-col gap-2 pt-30 ${
            windowWidth < 867 ? "pl-6" : windowWidth < 1024 ? "pl-10" : "pl-40"
          }`}
        >
          <h1
            className={`font-bold text-[#252423] ${
              windowWidth < 548 ? "text-5xl" : "text-6xl"
            }`}
          >
            Getting Started
          </h1>
          <p
            className={`text-[#696867] font-semibold ${
              windowWidth < 548 ? "text-2xl" : "text-3xl"
            }`}
          >
            Resources and Documentation.
          </p>
        </div>
        <div className={`w-full h-full flex items-center ${windowWidth < 1024 ? "justify-start" : "justify-center"}`}>
          <div className={`flex gap-10 h-full font-roobert ${ windowWidth < 867 ? "w-full px-6" :  windowWidth < 1024 ? "w-full px-10" : "w-3/4"}`}>
            <a href="https://www.npmjs.com/package/dimension-js" target='_blank' className="w-full h-full flex flex-col items-start gap-6">
              <svg
                className="text-[#252423] hover:text-[#f74f4d] transition-all duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 136"
                class="getting-started-image"
              >
                <g id="icon-download" fill="none" fill-rule="evenodd">
                  <polygon
                    stroke="currentColor"
                    stroke-width="2"
                    points="1 1 239 1 239 135 1 135"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 32 192 32 192 40 48 40"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 56 192 56 192 64 48 64"
                  ></polygon>
                  <path stroke="currentColor" d="M0 16h240"></path>
                  <polygon
                    stroke="currentColor"
                    points="48 40 192 40 192 48 48 48"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 64 192 64 192 72 48 72"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 48 192 48 192 56 48 56"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 72 192 72 192 80 48 80"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="48 96 192 96 192 135 48 135"
                  ></polygon>
                </g>
              </svg>
              <Btn text="Download" />
            </a>
            <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className={`w-full h-full flex flex-col items-start gap-6 ${windowWidth < 325 ? "hidden" : ""}`}>
              <svg
                className="text-[#252423] hover:text-[#f74f4d] transition-all duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 136"
                class="getting-started-image"
              >
                <g id="icon-documentation" fill="none" fill-rule="evenodd">
                  <polygon
                    stroke="currentColor"
                    stroke-width="2"
                    points="1 1 239 1 239 135 1 135"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="56 16 128 16 128 40 56 40"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="56 1 128 1 128 16 56 16"
                  ></polygon>
                  <path stroke="currentColor" d="M0 16h240"></path>
                  <polygon
                    stroke="currentColor"
                    points="56 40 128 40 128 64 56 64"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="56 64 128 64 128 88 56 88"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="56 88 128 88 128 112 56 112"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="56 112 128 112 128 136 56 136"
                  ></polygon>
                </g>
              </svg>
              <Btn text="Docs" />
            </a>
            <a href="https://mainpf-studio.vercel.app/" target='_blank' className={`w-full h-full flex flex-col items-start gap-6 ${windowWidth < 600 ? "hidden" : ""}`}>
              <svg
                className="text-[#252423] hover:text-[#f74f4d] transition-all duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 136"
                class="getting-started-image"
              >
                <g id="icon-examples" fill="none" fill-rule="evenodd">
                  <polygon
                    stroke="currentColor"
                    stroke-width="2"
                    points="1 1 239 1 239 135 1 135"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="0 16 80 16 80 56 0 56"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="80 16 160 16 160 56 80 56"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="160 16 240 16 240 56 160 56"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="0 56 80 56 80 96 0 96"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="80 56 160 56 160 96 80 96"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="160 56 240 56 240 96 160 96"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="0 96 80 96 80 136 0 136"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="80 96 160 96 160 136 80 136"
                  ></polygon>
                  <polygon
                    stroke="currentColor"
                    points="160 96 240 96 240 136 160 136"
                  ></polygon>
                  <path stroke="currentColor" d="M0 16h240"></path>
                </g>
              </svg>
              <Btn text="Portfolio" />
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full">
       <Footer />
      </footer>
    </div>
  );
}

export default Page3;
