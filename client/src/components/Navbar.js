import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Dropdown, Navbar, TextInput, Button } from 'flowbite-react';
import { signOut } from '../redux/slice/userSlice'
import { AiOutlineSearch } from 'react-icons/ai';
const NavbarC = () => {
    const { currentUser } = useSelector(state => state.user);
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signOutHandler() {
        dispatch(signOut());
        navigate('/login');
    }
    
    return (
        <Navbar className="border-b-1 lg:pl-[50px] " >

            <h1 className='text-[30px] font-bold '><Link to="/"><span className=' text-[rgb(221,158,3)]'>Wood</span><span className='text-[rgb(91,178,76)]'>hill</span></Link></h1>
            <div className='flex gap-2 md:order-2'>
                {
                    currentUser &&
                    <Dropdown arrowIcon={false} inline label={<img src={currentUser.photo} alt="User" className='border w-[2em] border-sky-500 shadow-lg rounded-[20px] ' />}>
                        <Dropdown.Header>
                            <span className="block text-sm">@{currentUser.name}</span>
                        </Dropdown.Header>
                        <Link to="/dashboard?tab=profile">
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => { signOutHandler() }}>Sign out</Dropdown.Item>
                    </Dropdown>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse active='text-sky-400'>
                <Link to='/'>
                    <Navbar.Link  active={path === '/'} as={'div'}>
                        Home
                    </Navbar.Link>
                </Link>
                <Link to='/about'>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        About
                    </Navbar.Link>
                </Link>
                <Link to='/contact'>
                    <Navbar.Link active={path === '/contact'} as={'div'}>
                        Contact
                    </Navbar.Link>
                </Link>
                {!currentUser && <>
                    <Link to="/login">
                        <Navbar.Link active={path === '/login'} as={'div'}>
                            Login
                        </Navbar.Link>
                    </Link>
                    <Link to="/Register">
                        <Navbar.Link  active={path === '/Register'} as={'div'}>
                            Register
                        </Navbar.Link>
                    </Link>
                </>
                }
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavbarC
