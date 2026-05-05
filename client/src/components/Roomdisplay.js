import React from 'react'
import {useEffect,useState} from 'react'
import RoomCard from './RoomCard';
const Roomdisplay = () => {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        const handleShowListings = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing`);
                const data = await res.json();
                if (data.success === true) {
                    setListings(data.listing);
                }
            } catch (error) {
                //setShowListingsError(true);
                console.log(error);
            }
        };
        handleShowListings();
    }, []);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-4 '>
     {
        listings?.map((room,i)=>(<RoomCard key={i} listing={room}/>)        
        )
     }
    </div>
  )
}

export default Roomdisplay
