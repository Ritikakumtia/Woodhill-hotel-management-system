import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Listing = () => {
    const [userListings, setUserListings] = useState([]);


    useEffect(() => {
        const handleShowListings = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing`);
                const data = await res.json();
                if (data.success === true) {
                    setUserListings(data.listing);
                }
            } catch (error) {
                //setShowListingsError(true);
                console.log(error);
            }
        };
        handleShowListings();
    }, []);

    const handleListingDelete = async (listingId) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing/delete/${listingId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                console.log("message ",data.message);
                return;
            }

            setUserListings((prev) =>
                prev.filter((listing) => listing._id !== listingId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex justify-center  w-full mt-[8vh]'>
            {userListings.length > 0 ? (
                <div className='flex flex-col gap-4'>
                    <h1 className='text-center mt-7 text-2xl font-semibold'>
                        Your Listings
                    </h1>
                    {userListings.map((listing) => (
                        <div
                            key={listing._id}
                            className='border rounded-lg p-3 flex-col flex md:flex-row lg:flex-row justify-between items-center gap-[6vw]'
                        >
                            <div className='flex gap-4 item-center'>
                            <Link to={`/room/${listing._id}`}>
                                <img
                                    src={listing.imageUrls[0]}
                                    alt='listing cover'
                                    className='h-16 w-16 object-contain'
                                />
                            </Link>
                            <Link
                                className='text-white font-semibold   hover:underline truncate flex-1'
                                to={`/room/${listing._id}`}
                            >
                                <p>{listing.name}</p>
                            </Link>
                            </div>
                            <p>&#8377; {listing.regularPrice}</p>

                            <div className='flex gap-4 item-center'>
                                <button
                                    onClick={() => handleListingDelete(listing._id)}
                                    className='text-red-700 uppercase'
                                >
                                    Delete
                                </button>
                                <Link to={`/dashboard?tab=create-listing&id=${listing._id}`}>
                                    <button className='text-green-700 uppercase'>Edit</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <div >No lisiting created yet</div>}

        </div>
    )
}

export default Listing
