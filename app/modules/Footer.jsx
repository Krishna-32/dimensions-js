import React from 'react'

function Footer() {
  return (
    <div className='nav-container bg-[#252423] absolute bottom-0 w-full px-10 pt-6 pb-10 xl:px-52 flex justify-between items-start font-medium font-roobert max-[388px]:justify-center'>
      <div className='nav-left flex flex-col gap-1'>
        <a href="http://localhost:3000/" className='font-mono uppercase text-lg cursor-pointer text-[#f6f4f2]'>Dimension-JS</a>
        <div className='gap-2 text-[#f6f4f2] text-sm font-[100] hidden min-[388px]:flex'>
        <p>v0.0.0</p>
        <p>|</p>
        <p>MIT License</p>
        <p>|</p>
        <p>2025</p>
        <p>|</p>
        <p>© Krishna Gupta</p>
        </div>
        
      </div>
      <div className='nav-right gap-4 items-center flex'>
        <a href="/documentation" className='text-[#f6f4f2] hidden min-[822px]:flex'>Documentation</a>
        <a href="/examples" className='text-[#f6f4f2] hidden min-[822px]:flex'>Examples</a>
        <a href="https://www.npmjs.com/package/dimension-js" className='bg-[#f74f4d] rounded-full hidden min-[535px]:flex min-[535px]:py-1 min-[535px]:px-3 text-[#252423]'>Download v0.0.0</a>
      </div>
    </div>
  )
}

export default Footer