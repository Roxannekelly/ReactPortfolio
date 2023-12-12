import React from 'react'
const Plant = require ('../assets/Plant.jpg')
const Starbuck = require ('../assets/Starbuck.png')
const Portfolio =()=> {
  return (
    <div>
        <h1 className='uppercase text-center text-5xl font-extrabold pb-16 '>Portolio</h1>
        <div>
            <section className="overflow-hidden text-gray-700 py-10 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <a href='https://roxannekelly.github.io/InteriorDesign/'> 
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={Plant} />
                </a>
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <a href='https://roxannekelly.github.io/portfolio/Starbuck%20Clone/index.html'>
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src={Starbuck} />
                </a>
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
        </div>
       
        </div>
  </div>
</section>
        </div>

    </div>
  )
}

export default Portfolio