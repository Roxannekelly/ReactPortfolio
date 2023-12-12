import React from 'react'
const Resume = require ('../../assets/Resume.pdf')

const About =() =>{
  return (
    <div className='my-4'>
        <div className='py-4'>
            <h1 className='uppercase text-center text-5xl font-extrabold pb-16 '>About Me</h1>
        </div>
            <div className=' flex flex-row justify-around'>
               <div className=''> 
                    <h1 className='uppercase text-2xl font-bold pl-4'>Personal Infos
                    </h1>
                    <div className='flex justify-between p-4'>
                        <div className='flex flex-col'>
                            <span className='py-1 text-xl font-semibold'>First Name: Roxanne</span>                  
                            <span className='py-1 text-xl font-semibold'>Age: 27 Years</span>              
                            <span className='py-1 text-xl font-semibold'>Phone: +1874318751</span>
                        </div>
                    </div>
                </div> 

                <div className=''>
                    <div className='flex flex-col pt-10'>
                        <span className='py-1 text-xl font-semibold'>Last Name: Steve</span>                  
                        <span className='py-1 text-xl font-semibold'>Nationality: Jamaican</span> 
                        <span className='py-1 text-xl font-semibold'>Email: Roxannekel71@gmail.com</span>            
                        <span className='py-1 text-xl font-semibold'>Address: 514 Silverstone Greater Portmore</span>
                    </div>  
                    </div>       
        </div>
        <div className='flex justify-center py-4'>
            <a href={Resume}>
           <button className='block px-8 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'> Download CV </button>
            </a>
            </div>    
        <div className='py-4 '>
            <h1 className='uppercase text-xl font-bold text-center'>My Skills</h1>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> HTML</span> 
            </div>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '75%'}}> 75%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> Javascript</span> 
            </div>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> css</span> 
            </div>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '60%'}}> 60%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> React</span> 
            </div>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '50%'}}> 50%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> Tailwind</span> 
            </div>
            <div className='pl-4'>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '50%'}}> 50%</div>
                </div>
                <span className='uppercase text-lg font-semibold'> Python</span> 
            </div>
        </div>
    <div className='lg:flex'>
        <div className=''>
            <h1 className='uppercase text-2xl font-bold text-center'>Education</h1>
            <div className='ml-4'>
               
                <div className='mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Sept 2008 - July 2013</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Norman Manley High School</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
                <div className='mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Sept 2013 - July 2015</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>St. Andrew Technical High School</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
                <div className='mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> July 2017 - Dec 2017</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Vector Technology Institute</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
            </div>
        </div>
        <div className=''>
            <h1 className='uppercase text-2xl font-bold text-center'>Experience</h1>
            <div className='ml-4'>
                <div className=' mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Jan 2017 - Sept 2022</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Graphic Designer</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
                <div className=' mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Mar 2016 - present</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Record Officer</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
                <div className=' mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Jul 2021 - Aug 2021</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Graphic Design Intern</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
                <div className=' mb-8'>
                    <h1 className="bg-black rounded-full w-44 text-center font-bold text-white "> Mar 2022 - Sept 2022</h1>
                    <h1 className='uppercase py-2 font-bold text-lg'>Security Intern</h1>
                    <p className='font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit
                    </p>
                </div>
            </div>
        </div>
     </div>   
    </div>
  )
}

export default About