"use client";

import React, { useState, useEffect } from "react";
import { GooglyEyes } from "dimension-js";
import { Page2Icons } from "@/app/modules";

function Page2() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col gap-20 ${windowWidth < 1024 ? 'items-start' : 'items-center'}`}>
     <div className="font-roobert w-full items-start flex flex-col gap-20">
      <div className={`w-full flex flex-col gap-2 pt-30 ${windowWidth < 867 ? 'pl-6' : windowWidth < 1024 ? 'pl-10' : 'pl-40'}`}>
        <h1 className={`font-bold text-[#252423] ${windowWidth < 548 ? 'text-5xl' : 'text-6xl'}`}>Tracking</h1>
        <p className={`text-[#696867] font-semibold ${windowWidth < 548 ? 'text-2xl' : 'text-3xl'}`}>
          Animations using mouse movements.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <GooglyEyes eyeColor="#f6f4f2" pupilColor="#252423" borderColor="#252423" pupilSize='15vw' eyeSize='40vw' />
      </div>
    </div>
    <Page2Icons />
    </div>
  );
}

export default Page2;
