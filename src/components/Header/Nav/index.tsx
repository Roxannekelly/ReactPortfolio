import React from 'react'

const NavBar = () => {
  return (
    <div className='border-b-4 flex justify-between px-4 bg-white fixed top-0 w-full shadow-md py-4'>
        <div className=''>
            <h2 className='text-2xl font-bold'>Roxanne Kelly</h2>
            <h1 className='text-3xl uppercase font'>Graphic Designer/ Developer</h1>
        </div>
        <div className='space-x-3 text-xl font-semibold'> 
            <span> portfolio</span>
            <span>about</span>
            <span>contact</span>
        </div>
    </div>
  )
}

export default NavBar