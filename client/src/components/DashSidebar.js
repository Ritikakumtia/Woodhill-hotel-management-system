import { Sidebar } from 'flowbite-react'
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import {signOut} from "../redux/slice/userSlice"
import { HiUser, HiArrowSmRight, HiDocumentText } from 'react-icons/hi'
import { useDispatch, useSelector} from 'react-redux';
import { IoIosCreate } from "react-icons/io";
const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const navigate = useNavigate();;
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tabUrl = params.get('tab');
        if (tabUrl) {
            setTab(tabUrl);
        }
    }, [location.search]);
    const dispatch=useDispatch();
    const handleSignOut=async()=>{
        dispatch(signOut());
        navigate('/login');
      }
    const {currentUser}=useSelector((state)=>state.user);
    return (
        <Sidebar className='w-full md:w-56 ' >
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                    <Link to="/dashboard?tab=profile">
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} labelColor='dark' as='div'>
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Link to="/dashboard?tab=Bookings">
                        <Sidebar.Item active={tab === 'Bookings'} icon={HiDocumentText} labelColor='dark' as='div'>
                            Booking
                        </Sidebar.Item>
                    </Link>
                    {
                        currentUser.isAdmin && (<Link to="/dashboard?tab=create-listing">
                        <Sidebar.Item active={tab === 'create-listing'} icon={IoIosCreate} labelColor='dark' as='div'>
                            Create Listing
                        </Sidebar.Item>
                    </Link>)
                    }
                    {
                        currentUser.isAdmin && (<Link to="/dashboard?tab=listings">
                        <Sidebar.Item active={tab === 'listings'} icon={IoIosCreate} labelColor='dark' as='div'>
                            Listings
                        </Sidebar.Item>
                    </Link>)
                    }
                    <Sidebar.Item onClick={handleSignOut}  icon={HiArrowSmRight} className='Cusor-pointer' as='div'>
                    Sign Out
                </Sidebar.Item> 
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar
