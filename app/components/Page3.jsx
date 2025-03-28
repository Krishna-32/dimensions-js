"use client";

import React, { useState, useEffect } from "react";
import { TextHover } from "dimension-js";
import { Page3Icons } from "@/app/modules";

function Page3() {
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
        <h1 className={`font-bold text-[#f6f4f2] ${windowWidth < 548 ? 'text-5xl' : 'text-6xl'}`}>Hovering</h1>
        <p className={`text-[#b8b6b4] font-semibold ${windowWidth < 548 ? 'text-2xl' : 'text-3xl'}`}>
          Animations using hover effects.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <TextHover t1="Hovering" t2="Animation" img={"/bg.jpg"} textColor="#f6f4f2" borderColor="#f6f4f2" />
        <TextHover t1="Effect" t2="" img={"/bg.jpg"} textColor="#f6f4f2" borderColor="#f6f4f2" />
      </div>
    </div>
    <Page3Icons />
    </div>
  );
}

export default Page3;
