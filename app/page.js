import React from 'react'
import Navbar from './modules/Navbar'
import InfiniteTextMenu from './components/InfiniteTextMenu'
function page() {

  return (
    <div className="wrapper">

      <div className="main bg-[#252423] w-full h-full flex flex-col items-center">
        <div className='py-6 w-full'>
          <Navbar />
          <div className=''>
            <InfiniteTextMenu />
          </div>

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