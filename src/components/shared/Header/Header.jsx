import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";
import { TbBrandYoutube } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import MenuToggler from './NavMenu';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className='header bg-black py-4 lg:py-3'>
            <div className='container'>
                <nav className='primary-menu relative'>
                    <div className='flex flex-wrap -mx-3 items-center justify-between'>
                        <div className='w-3/12 md:w-4/12 px-3 order-2 lg:order-1'>
                            <NavMenu></NavMenu>
                        </div>
                        <div className='w-12/12 lg:w-4/12 px-3 order-1 lg:order-2'>
                            <div className='flex justify-center items-center'>
                                <Logo></Logo>
                            </div>
                        </div>
                        <div className='w-6/12 md:w-4/12 px-3 order-2'>
                            <ul className='flex justify-end items-center'>
                                <li>
                                    <a href="#" className='text-[22px] hover:text-orange-500 duration-300 h-10 w-10 flex justify-center items-center'><FiFacebook /></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[21px] hover:text-orange-500 duration-300 h-10 w-10 flex justify-center items-center'><FaXTwitter /></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[21px] hover:text-orange-500 duration-300 h-10 w-10 flex justify-center items-center'><TfiInstagram /></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[22px] hover:text-orange-500 duration-300 h-10 w-10 flex justify-center items-center'><TbBrandYoutube /></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[22px] hover:text-orange-500 duration-300 h-10 w-10 flex justify-center items-center'><FiLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;