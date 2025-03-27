'use client'

import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

function GettingStartedBtn() {
  const [showArrow, setShowArrow] = useState(false)

  return (
    <div 
      className={`flex items-center gap-2 text-roobert text-lg cursor-pointer text-[#f74f4d] font-medium  hover:underline`}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <BsArrowRight className={`transition-all duration-300 ${showArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
      <span className={`transition-all duration-300 ${showArrow ? 'translate-x-0' : '-translate-x-6'}`}>
        Getting Started
      </span>
    </div>
  )
}

export default GettingStartedBtn