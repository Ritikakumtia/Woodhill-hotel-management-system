import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux';
function RoomCard({ listing }) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  function handleBooking() {
    if (currentUser) {
      navigate(`/room/${listing._id}`);
    }
    else {
      navigate('/login')
    }

  }
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>

      <img
        src={
          listing.imageUrls[0] ||
          'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
        }
        alt='listing cover'
        className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
      />
      <div className='p-3 flex flex-col gap-2 w-full h-full'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='truncate text-lg font-semibold text-slate-700'>
              {listing.name}
            </p>
          </div>
          <div className='text-green-700 font-bold'>&#8377;{listing.regularPrice}</div>
        </div>

        <p className='text-sm text-gray-600 line-clamp-2'>
          {listing.description.slice(0, 120)+"...."}
        </p>
        <div className='flex flex-col justify-between gap-2 '>
          <div className='text-slate-700  flex flex-wrap gap-2'>

            {listing.facilities.map((fac, i) => (
              <span className='text-slate-900 bg-slate-200 p-[2px] rounded-[10px] text-[12px] font-bold' key={i}>{fac}</span>
            ))}
          </div>

          <Button className='relative bottom-0' disabled={listing.isBooked}
            gradientDuoTone="greenToBlue"
            onClick={handleBooking}
          >Book</Button>
        </div>
      </div>

    </div>
  );
}

export default RoomCard

