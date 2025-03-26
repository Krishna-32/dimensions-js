"use client";

import React, { useEffect, useRef, useState } from "react";
import { InfiniteTextMenu as ITM } from "dimension-js";

function InfiniteTextMenu() {
  const menuRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const subtitles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const titles = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji", "Chopper", "Robin", "Franky", "Brook", "Jinbe"];
  const bgImage = "/bg.jpg";

  useEffect(() => {
    // Set initial window width after component mounts
    setWindowWidth(window.innerWidth);

    const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden'; // Disable page scrolling when hovering
    };

    const handleMouseLeave = () => {
      document.body.style.overflow = ''; // Re-enable page scrolling when the mouse leaves
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('mouseenter', handleMouseEnter);
      menuElement.addEventListener('mouseleave', handleMouseLeave);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (menuElement) {
        menuElement.removeEventListener('mouseenter', handleMouseEnter);
        menuElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-red-500 w-fit h-[full] relative left-1/2 -translate-x-1/2 my-10 rounded-lg" ref={menuRef}>
      <ITM
        subtitle={subtitles}
        title={titles}
        bgImage={bgImage}
        subtitleColor="white"
        titleColor="white"
        width={windowWidth < 320 ? "70vw" : windowWidth < 380 ? "90vw" : windowWidth < 420 ? "80vw" : windowWidth < 600 ? "85vw" : windowWidth < 768 ? "90vw" : windowWidth < 1024 ? "90vw" : windowWidth < 1280 ? "90vw" : "65vw"}
        height="45vw"
        subtitleFontSize={windowWidth < 320 ? ".6rem" : windowWidth < 420 ? "1rem" : windowWidth < 600 ? "1.2rem" : windowWidth < 768 ? "1.425rem" : windowWidth < 1024 ? "1.7rem" : windowWidth < 1280 ? "1.925rem" : "2.2rem"}
        titleFontSize={windowWidth < 320 ? "1.2rem" : windowWidth < 420 ? "2.2rem" : windowWidth < 600 ? "3rem" : windowWidth < 768 ? "3.5rem" : windowWidth < 1024 ? "4rem" : windowWidth < 1280 ? "4.5rem" : "5rem"}
      />
    </div>
  );
}

export default InfiniteTextMenu;
