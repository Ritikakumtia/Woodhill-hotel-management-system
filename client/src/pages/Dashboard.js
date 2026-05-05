import React from 'react'
import DashSidebar from '../components/DashSidebar'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import DashProfile from '../components/DashProfile';
import CreateListing from "../components/CreateListing"
import Listing from '../components/Listing';
import Bookings from '../components/Bookings';
const Dashboard = () => {
  const location=useLocation();
  const [tab,setTab]=useState('profile');
  useEffect(()=>{
   const params=new URLSearchParams(location.search);
   const tabUrl=params.get('tab');
   if(tabUrl)
   {
    setTab(tabUrl);
   } 
  },[location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56 '>
      <DashSidebar/>
      </div>
        {
          tab==='profile' && <DashProfile/>
        } 
        {
          tab==='Bookings' && <Bookings/>
        } 
        {
          tab==='create-listing' && <CreateListing/>
        } 
        {
          tab==='listings' && <Listing/>
        } 

    </div>
  )
}

export default Dashboard
