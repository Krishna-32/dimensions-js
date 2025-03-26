"use client";

import React from "react";
import { GooglyEyes } from "dimension-js";
import { Page2Icons } from "@/app/modules";
function Page2() {
  return (
    <div className=" h-full flex flex-col items-center gap-20">
     <div className="font-roobert w-fit items-start flex flex-col gap-20">
      <div className="w-full flex flex-col gap-2 pt-30 pl-40">
        <h1 className="text-6xl font-bold text-[#252423]">Tracking</h1>
        <p className="text-[#696867] text-3xl font-semibold">
          Animations using mouse movements.
        </p>
      </div>
      <div className="w-fit h-full flex items-center justify-center">
        <GooglyEyes eyeColor="#f6f4f2" pupilColor="#252423" borderColor="#252423" pupilSize='200px' eyeSize='500px' />
      </div>
    </div>
    <Page2Icons />
    </div>
  );
}

export default Page2;
