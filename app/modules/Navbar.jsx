import React from 'react'

function Navbar() {
  return (
    <div className='nav-container w-full px-10 xl:px-52 flex justify-between items-center font-medium font-roobert max-[380px]:justify-center'>
      <div className='nav-left'>
        <span className='font-mono uppercase text-lg'>Dimension-JS</span>
      </div>
      <div className='nav-right gap-4 items-center flex'>
        {['Documentation', 'Examples', 'Sponsor', 'Download v0.0.0'].map((item, index) => (
          <span key={index} className={`font-roobert ${index === 3 ? 'bg-[#f74f4d] rounded-full hidden min-[380px]:flex min-[380px]:py-1 min-[380px]:px-3 text-[#252423]' : 'text-[#f6f4f2] hidden min-[669px]:flex'}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Navbar