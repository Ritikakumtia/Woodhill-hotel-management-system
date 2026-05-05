import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaMobileAlt } from "react-icons/fa";
import { GiDeadWood } from "react-icons/gi";
const Contact = () => {
  return (
    <div className='flex justify-center flex-wrap items-center gap-2 min-h-screen'>
      <div className='font-Bold text-[rgb(220,169,93)] p-4 lg:p-0'>
        <h1 className='text-[55px] text-sky-500'>Contact Us </h1>
        <h2 className='flex gap-2 mt-8'>
        <GiDeadWood className='h-4 w-4 text-green-700'/>
          <span className='text-[rgb(220,169,93)]'>
            Woodhill hotel and restaurant
          </span>
        </h2>
        <p className='flex gap-2'><MdLocationOn className='h-4 w-4 text-green-700' />
          <span className='text-[rgb(220,169,93)]'>Post office, Nanital road Ghatgar Ghatgar, Mangoli, Nainital, Uttarakhand 263101</span>
        </p>
        <p className='flex gap-2 text-[rgb(220,169,93)]'>
          <FaMobileAlt className='h-4 w-4 text-green-700' />
        9548652349</p>
      </div>
      <iframe className=' rounded-[15px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.417602981026!2d79.3744204752727!3d29.32875485212533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a7535eb668033%3A0xcd83262448f4ae87!2sWoodhill%20hotel%20and%20restaurant!5e0!3m2!1sen!2sin!4v1712584449231!5m2!1sen!2sin" style={{ border: "0", width: "40vw", height: "70vh" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact
