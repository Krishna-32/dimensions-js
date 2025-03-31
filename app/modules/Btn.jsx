'use client'

import React, { useState, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { TextRandomizer } from "dimension-js";


function Btn({text}) {
  const [showArrow, setShowArrow] = useState(false)
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
      className={`flex items-center gap-2 text-roobert cursor-pointer text-[#f74f4d] font-medium  hover:underline ${windowWidth < 383 ? "text-sm" : "text-lg"}`}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <BsArrowRight className={`transition-all duration-30 ${showArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
      <span className={`transition-all duration-300 font-semibold ${showArrow ? 'translate-x-0' : '-translate-x-6'}`}>
        <TextRandomizer>
          {text}
        </TextRandomizer>
      </span>
    </div>
  )
}

export default Btn