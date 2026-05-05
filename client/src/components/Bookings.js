import React from 'react'
import { Table } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Bookings = () => {
    const [bookings, setBookings] = useState([]);  
    const {currentUser} =useSelector((state)=>state.user);
    useEffect(() => {
        const handleShowBookings = async () => {
            try {
                let s="";
                if(!currentUser.isAdmin)
                {
                    s+="/"+String(currentUser._id);
                }
                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/booking${s}`);
                const data = await res.json();
                if (data.success === true) {
                    setBookings(data.listing);
                }
            } catch (error) {
                //setShowListingsError(true);
                console.log(error);
            }
        };
        handleShowBookings();
    }, []);

    

    return (
        <div className='table-auto  mt-4 overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {
        bookings.length > 0 ? (<>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Room</Table.HeadCell>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>CheckIn Date</Table.HeadCell>
              <Table.HeadCell>CheckOut Date</Table.HeadCell>
              <Table.HeadCell>Adults</Table.HeadCell>
              <Table.HeadCell>
                Childrens
              </Table.HeadCell>
              <Table.HeadCell>
                Amount
              </Table.HeadCell>
            </Table.Head>
            {bookings.map((room,i) => (
              <Table.Body key={i} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                  <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/room/${room.room._id}`}
                    >
                    {room.room.name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/room/${room.room._id}`}>
                      <img
                        src={room.room.imageUrls[0]}
                        alt={room.room.name}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                      {room.checkIn}
                  </Table.Cell>
                  <Table.Cell>{room.checkOut}</Table.Cell>
                  <Table.Cell>
                    
                      {room.adults}
                  </Table.Cell>
                  <Table.Cell>
                    {room.childrens}
                  </Table.Cell>
                  <Table.Cell>
                    {room.totalCost}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          
        </>) : (
          <p className='flex justify-center text-green-500 font-bold text-xl'>No Booking yet</p>
        )
      }
      
    </div>

    )
}

export default Bookings;
