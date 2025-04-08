import React from 'react'

function Navbar() {
  return (
    <div className='nav-container w-full px-10 xl:px-52 flex justify-between items-center font-medium font-roobert max-[380px]:justify-center'>
      <div className='nav-left'>
        <a href="http://localhost:3000/" className='font-mono uppercase text-lg cursor-pointer text-[#f6f4f2]'>Dimension-JS</a>
      </div>
      <div className='nav-right gap-4 items-center flex'>
        <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className='text-[#f6f4f2] hidden min-[669px]:flex'>Documentation</a>
        <a href="https://krishna.mintlify.app/AnimatedLine" target='_blank' className='text-[#f6f4f2] hidden min-[669px]:flex'>Examples</a>
        <a href="https://mainpf-studio.vercel.app/" target='_blank' className='text-[#f6f4f2] hidden min-[669px]:flex'>Sponsor</a>
        <a href="https://www.npmjs.com/package/dimension-js" target='_blank' className='bg-[#f74f4d] rounded-full hidden min-[380px]:flex min-[380px]:py-1 min-[380px]:px-3 text-[#252423]'>Download v0.0.4</a>
      </div>
    </div>
  )
}

export default Navbar