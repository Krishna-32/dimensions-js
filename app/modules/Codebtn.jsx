'use client'

import React, { useState, useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Codebtn({text}) {
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
    <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank'
      className={`flex items-center gap-2 text-roobert text-lg cursor-pointer text-[#f74f4d] font-medium  hover:underline ${windowWidth < 903 ? 'pl-0' : 'pl-20'}`}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <BsArrowRight className={`transition-all duration-300 ${showArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
      <span className={`transition-all duration-300 ${showArrow ? 'translate-x-0' : '-translate-x-6'}`}>
        {text}
      </span>
    </a>
  )
}

export default Codebtn