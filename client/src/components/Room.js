import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'flowbite-react';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import toast from 'react-hot-toast';
// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

export default function Room() {
  // SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [noOfChildren, setNoOfChildren] = useState(0);
  const [adults, setAdults] = useState(0);
  const [isBooked, setIsBooked] = useState(false);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [noOfDays, setNoOfDays] = useState(1);
  const [rPrice, setRPrice] = useState(0);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing/${params.roomId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data.listing[0]);
        setRPrice(data.listing[0].regularPrice);
        setIsBooked(data.listing[0].isBooked);
        console.log(data.listing);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.roomId]);

  const calcNoOfDays = () => {
    console.log("Days")
    if (!checkinDate || !checkoutDate) return;
    console.log(String(checkinDate.getDate())+"-"+String(checkinDate.getMonth())+"-"+String(checkinDate.getFullYear()) , typeof(checkinDate.getDate() ))
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    let x=Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    console.log(rPrice * x);
    return x;
  };
  // useEffect(() => {
  //   console.log(noOfDays, rPrice);
  //   if (noOfDays > 1) {
  //     setPrice(rPrice * noOfDays);
  //   }
  // }, [noOfDays]);
  
  const handleBookNowClick = async (e) => {
    e.preventDefault();
    if(calcNoOfDays()<1 || adults<=0 )
    {
      return toast.error("Please fill all details");
    }
    try {
      
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/booking/create`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room:params.roomId,
          userRef: currentUser._id,
          checkIn:String(checkinDate.getDate())+"-"+String(checkinDate.getMonth())+"-"+String(checkinDate.getFullYear()),
          checkOut:String(checkoutDate.getDate())+"-"+String(checkoutDate.getMonth())+"-"+String(checkoutDate.getFullYear()),
          adults:adults,
          children:noOfChildren,
          totalCost:(calcNoOfDays()* rPrice)
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(data.message);
      }
      setIsBooked(true);
      toast.success("Booking Is created");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <main className='mt-[50px] w-[98vw] min-h-screen flex justify-center'>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div className='w-[70vw] '>
          <Swiper modules={[Navigation]} navigation centeredSlides={true} loop={true}>
            {listing.imageUrls.map((url, id) => (
              <SwiperSlide className='  flex justify-center ' key={url}>
                <div
                  className=' h-[60vh] w-[75vw]'
                  style={{
                    background: `url(${url}) center space`,
                    backgroundSize: 'contain',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
            <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div> */}
          <div className='flex flex-col lg:flex-row mt-8 '>
            <div className='flex flex-col max-w-4xl mx-auto p-3  gap-2'>
              <p className='text-[rgb(220,169,93)] mt-4'>
                {listing.description}
              </p>
              <ul className='text-green-400  mt-4 font-semibold text-sm flex  flex-wrap items-center gap-4 sm:gap-6'>
                {listing.facilities.map((fac, i) => (
                  <li key={i} className='flex justify-center items-center gap-1 p-[2vw] rounded-[12px] bg-slate-700'>
                    {fac}
                  </li>
                ))}
              </ul>
              <div className='text-sky-500 text-[20px]'>
                <div>
                  CheckIn - {listing.checkIn}
                </div>
                <div>
                  CheckOut - {listing.checkOut}
                </div>
              </div>
              <div className=' mt-4 text-[12px]'>
              <p className='text-red-500 text-[25px]'>Notes</p>
              <p className='text-red-300'>*Animals Not allowed</p>
              <p className='text-red-300'>*Id will be asked at the time of checkIn</p>
              </div>
            </div>
            <div className='px-7 py-6'>
              <h3 className={'text-sky-500  text-[15px]'}>
                Regular Price
                <span
                  className={'text-[rgb(101,217,182)] font-bold text-[20px]'}
                >
                  {' '}&#8377;{rPrice}
                </span>

              </h3>

              <div className='w-full border-b-2 border-b-secondary my-2 ' />

              <div className='flex gap-4'>
                <div className='w-1/2 pr-2 '>
                  <label
                    htmlFor='check-in-date'
                    className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Check In date
                  </label>
                  <DatePicker
                    selected={checkinDate}
                    onChange={date => setCheckinDate(date)}
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    id='check-in-date'
                    className='w-full border mt-2 text-[10px] bg-slate-700 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                  />
                </div>
                <div className='w-1/2 pl-2'>
                  <label
                    htmlFor='check-out-date'
                    className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Check Out date
                  </label>
                  <DatePicker
                    selected={checkoutDate}
                    onChange={(date) => {
                      setCheckoutDate(date);
                    }}
                    dateFormat='dd/MM/yyyy'
                    disabled={!checkinDate}
                    minDate={new Date()}
                    id='check-out-date'
                    className='w-full border text-[10px] mt-2 bg-slate-700  rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                  />
                </div>
              </div>

              <div className='flex mt-4 '>
                <div className='w-1/2 pr-2'>
                  <label
                    htmlFor='adults'
                    className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Adults
                  </label>
                  <input
                    type='number'
                    id='adults'
                    value={adults}
                    onChange={e => setAdults(+e.target.value)}
                    min={1}
                    max={2}
                    className='w-full border mt-2 bg-slate-700 rounded-lg p-2.5'
                  />
                </div>
                <div className='w-1/2 pl-4'>
                  <label
                    htmlFor='children'
                    className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Children
                  </label>
                  <input
                    type='number'
                    id='children'
                    value={noOfChildren}
                    onChange={e => setNoOfChildren(e.target.value)}
                    min={0}
                    max={2}
                    className='w-full border mt-2 bg-slate-700 rounded-lg p-2.5'
                  />
                </div>
              </div>

              {calcNoOfDays() >= 1 ? (
                <p className='mt-3'>Total Price: &#8377; {calcNoOfDays()* rPrice}</p>
              ) : (
                <p className='text-red-400 mt-3'>Enter the valid dates</p>
              )}
              <div className='w-full flex justify-center mt-4'>
                <Button
                  disabled={isBooked}
                  onClick={handleBookNowClick}
                  gradientDuoTone="greenToBlue"
                >{isBooked ? 'Booked' : 'Book Now'}</Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
