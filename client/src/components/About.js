import React from 'react'
import img1 from "../images/img4.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import gal1 from "../images/gallery1.jpg"
import gal2 from "../images/gallery2.jpg"
import gal3 from "../images/gallery3.jpg"
import gal4 from "../images/gallery4.jpg"
import gal5 from "../images/gallery5.jpg"
import gal6 from "../images/gallery6.jpg"
const About = () => {
  return (
    <div className='min-h-screen flex justify-center align-middle w-[98vw] h-[58vw]border-box mt-[8vh]'>
    <div className='flex flex-col text-[18px] justify-center items-center  lg:w-[58vw] md:w-[58vw] w-[90vw]'>
        <h1 className='md:text-[3vw] lg:text-[3vw] text-[40px] text-sky-400'>
            About Us
        </h1>
        <p className='text-gray-400 mt-4'>
        Welcome to Woodhill Hotel & Restaurant: your cozy haven nestled in the heart of Nainital. Located amidst the serene beauty of the Himalayas, our hotel and restaurant offer a simple yet charming retreat for travelers seeking a peaceful getaway.        </p>
      <div className="mt-4">
        <h1 className='md:text-[2vw] lg:text-[2vw] text-[25px] text-[rgb(101,217,182)]'>
        Accommodation
        </h1>
        <p className="text-gray-400 ">
        At Woodhill, we prioritize comfort and simplicity. Our rooms are tastefully decorated with warm hues and rustic furnishings, providing a homely ambiance that ensures a restful stay. Whether you choose a standard room or opt for a family suite, each accommodation option promises tranquility and relaxation.        </p>
      </div>
      <div className="mt-4">
        <h1 className='md:text-[2vw] lg:text-[2vw] text-[25px] text-[rgb(101,217,182)]'>
        Dining
        </h1>
        <p className="text-gray-400 ">
        Indulge your taste buds at our on-site restaurant, where simplicity meets flavor. Our culinary team crafts delicious dishes using locally sourced ingredients, ensuring freshness and authenticity in every bite. From traditional Kumaoni delicacies to familiar comfort foods, our menu caters to diverse palates, guaranteeing a delightful dining experience for all guests.        </p>
      </div>
      <div className="mt-4">
        <h1 className='md:text-[2vw] lg:text-[2vw] text-[25px] text-[rgb(101,217,182)]'>
        Services and Amenities
        </h1>
        <p className="text-gray-400 ">
        While we may not boast extravagant luxuries, we take pride in offering essential amenities to enhance your stay. Enjoy complimentary Wi-Fi access throughout the premises, allowing you to stay connected with loved ones or catch up on work. Our friendly staff is always on hand to assist with any requests, ensuring your comfort and satisfaction during your time with us.        </p>
      </div>
      <div className='flex gap-4 justify-center m-8 flex-wrap w-[95vw] lg:w-[58vw]'>
      <img className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300' src={img2} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={img3} alt="" />
        <img className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300' src={img1} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal1} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal2} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal3} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal4} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal5} alt="" />
        <img  className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] hover:scale-105 transition-scale duration-300'src={gal6} alt="" />
      </div>
     
    </div>
    </div>
  )
}

export default About
