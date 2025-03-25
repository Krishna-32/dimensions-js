import React from 'react'
import { Navbar, Icons } from './modules'
import { InfiniteTextMenu } from './components'
function page() {

  return (
    <div className="wrapper">

      <div className="main bg-[#252423] w-full h-full flex flex-col items-center pb-20">
        <div className='py-6 w-full flex flex-col gap-4'>
          <Navbar />
          <InfiniteTextMenu />
          <Icons />
        </div>
      </div>


      <div className="first bg-[#f6f4f2] w-full h-screen">
        
      </div>


      <div className="second bg-[#252423] w-full h-screen">

      </div>


      <div className="docs bg-[#f6f4f2] w-full h-screen">

      </div>

    </div>
  )
}

export default page