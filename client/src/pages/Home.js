import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react"
import Roomdisplay from '../components/Roomdisplay'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import Review from '../components/Review'
import { HiArrowSmRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div className='mt-[10vh]  flex flex-col lg:pl-[50px] justify-center items-center  '>
      <section className='flex md:flex-row flex-col px-4 items-center gap-6 container m-10 mx-auto'>
        <div className='md:py-10 h-full'>
          <h1 className=' text-[rgb(189,186,186)] font-bold text-[30px] md:text-[32px] lg:text-[40px] mb-6'>Explore Our Exquisite Hotel & Restaurant</h1>
          <p className='text-sky-400 text-[20px] md:text-[25px] lg:text-[30px] mb-12 max-w-lg'>
            Your cozy haven nestled in the heart of Nainital.
          </p>
          <a href="#rooms"><Button gradientDuoTone="greenToBlue" ><span className='text-[18px]'>Explore </span><HiArrowSmRight></HiArrowSmRight></Button></a>
          <div className='flex flex-wrap lg:text-[30px] gap-1 text-[15px] justify-between mt-14 font-bold md:pl-4 md:py-4 md:pr-10'>
            <div className='flex flex-col items-center md:p-2 bg-slate-800 rounded-[15px] justify-center'>
              <p className='text-center text-[rgb(221,158,3)]'>Basic Room</p>
              <h1 className='lg:text-[30px] text-[18px] text-[rgb(221,158,3)]'>5</h1>
            </div>
            <div className='flex flex-col items-center p-2 text-[rgb(221,158,3)] bg-slate-800  rounded-[15px] justify-center'>
              <p className=' text-center text-[rgb(221,158,3)]'>AC Room </p>
              <h1 className='lg:text-[30px] text-[20px] text-[rgb(221,158,3)]'>3</h1>
            </div>
            <div className='flex flex-col items-center text-[rgb(221,158,3)] bg-slate-800  p-2 rounded-[15px] justify-center'>
              <p className='text-center w-[70px] text-[rgb(221,158,3)]'>Hall</p>
              <h1 className='lg:text-[30px] text-[20px] text-[rgb(221,158,3)]'>1</h1>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center md:gap-8 lg:gap-8 gap-3'>
          <div className='flex flex-col gap-3 md:gap-8 lg:gap-8'>
            <div className='rounded-2xl overflow-hidden '>
              <img
                src={img2}
                alt='hero-1'
                className='sm:h-[150px] sm:w-[220px] md:h-[220px] md:w-[250px] lg:w-[300px] lg:h-[220px] rounded-2xl hover:scale-105 transition-scale duration-300'
              />
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <img
                src={img3}
                alt='hero-3'
                className='sm:h-[150px] sm:w-[220px] md:h-[220px] md:w-[250px] lg:w-[300px] lg:h-[220px] rounded-2xl hover:scale-105 transition-scale duration-300'
              />
            </div>
          </div>

          <div className='rounded-2xl overflow-hidden'>
            <img
              src={img1}
              alt='hero-2'
              className='sm:h-[340px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:w-[300px] lg:h-[400px] rounded-2xl hover:scale-105 transition-scale duration-300'
            />
          </div>
        </div>
      </section>
      <div id="rooms" className='w-[80vw] mt-[12vh] flex flex-col justify-center items-center'>
        <h1 className='text-[35px] text-sky-500 border-b-4 m-4 border-green-500'>Rooms</h1>
        <Roomdisplay />
      </div>
      <div className='flex flex-col m-16'>
        <div className="flex justify-center text-[30px] border-b-4  border-sky-500 text-green-500 font-bold">
          Our Reviews
        </div>
        <Review />
      </div>


    </div>

  )
}

export default Home
