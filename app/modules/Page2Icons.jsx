"use client";

import React from "react";
import { IoIosColorFill, IoMdColorFill } from "react-icons/io";
import { FaEye, FaRegEye, FaBorderStyle } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";

function Page2Icons() {
  return (
    // <div className="text-[#252423] w-full flex justify-center bg-red-400">
    //   <div className="flex justify-center gap-10">
    //   <div className="flex gap-10 font-mono">
    //   <div className="left-container">
    //     <div className="flex gap-2 items-center">
    //       <FaEye className="text-2xl" />
    //       <p className="text-sm">eyeSize</p>
    //     </div>
    //     <div className="flex gap-2 items-center">
    //       <IoIosColorFill className="text-2xl" />
    //       <p className="text-sm">eyeColor</p>
    //     </div>
    //     <div className="flex gap-2 items-center">
    //       <AiOutlineColumnWidth className="text-2xl" />
    //       <p className="text-sm"> eyeGap</p>
    //     </div>
    //   </div>
    //   <div className="right-container">
    //     <div className="flex gap-2 items-center">
    //       <FaRegEye className="text-2xl" />
    //       <p className="text-sm">pupilSize</p>
    //     </div>
    //     <div className="flex gap-2 items-center">
    //       <IoMdColorFill className="text-2xl" />
    //       <p className="text-sm">pupilColor</p>
    //     </div>
    //     <div className="flex gap-2 items-center">
    //       <FaBorderStyle className="text-2xl" />
    //       <p className="text-sm">borderWidth</p>
    //     </div>
    //   </div>
    //   </div>

    //   <div>
    //   <p className="text-lg font-roobert w-1/4 pl-20">
    //       Dimension-js (/dɪˈmɛn.ʃən/) is a lightweight JavaScript animation library
    //       with a simple, yet powerful API. It works with CSS properties, SVG,
    //       DOM attributes and JavaScript Objects.
    //     </p>
    //   </div>
    //   </div>
    // </div>


    <div className="main-container w-full flex justify-center text-[#252423]">
 
     <div className="left-container flex justify-center ">
     <div className="flex gap-10 font-mono">
       <div className="left-container">
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
       <div className="right-container">
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
      
      <div className="right-container w-1/4">
      <p className="text-lg font-roobert pl-20">
          Dimension-js (/dɪˈmɛn.ʃən/) is a lightweight JavaScript animation library
           with a simple, yet powerful API. It works with CSS properties, SVG,
           DOM attributes and JavaScript Objects.
      </p>
      </div>
     </div>

    
  );
}

export default Page2Icons;
