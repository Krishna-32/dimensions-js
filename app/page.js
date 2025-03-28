// 'use client'

import React from 'react'
import { Navbar, Icons } from './modules'
import { InfiniteTextMenu, Page2, Page3 } from './components'
// import { SmoothScroll } from 'dimension-js'
function page() {

  return (
    // <SmoothScroll>
    <div className="wrapper">

      <div className="main bg-[#252423] w-full h-full flex flex-col items-center pb-20">
        <div className='py-6 w-full flex flex-col gap-4'>
          <Navbar />
          <InfiniteTextMenu />
          <Icons />
        </div>
      </div>


      <div className="first bg-[#f6f4f2] w-full h-full pb-20">
        <Page2 />
      </div>


      <div className="second bg-[#252423] w-full h-full pb-20">
        <Page3 />
      </div>


      <div className="docs bg-[#f6f4f2] w-full h-full">

      </div>

    </div>
    // </SmoothScroll>
  )
}

export default page