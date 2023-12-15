import React from 'react'

const NavBar = () => {
  return (
    <div className='flex border-b-2 justify-around px-4 bg-hero text-white opacity-90 z-40 backdrop-blur fixed top-0 w-full shadow-md py-4'>
        <div>
            <h2 className='text-lg font-bold'>Roxanne Kelly</h2>
            <h1 className='uppercase font text-lg'>Graphic Designer/Developer</h1>
        </div>
        <div className='space-x-3 text-lg font-semibold'> 
            <span> portfolio</span>
            <span>about</span>
            <span>contact</span>
        </div>
    </div>
  )
}

export default NavBar