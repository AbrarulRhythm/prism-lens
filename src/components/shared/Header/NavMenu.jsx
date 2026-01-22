'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

const NavMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <button onClick={() => setOpenMenu(!openMenu)} className='w-10 h-10 border border-white flex lg:hidden items-center justify-center text-xl my-6'>
                {openMenu ? <RiCloseLargeFill /> : <HiMiniBars3CenterLeft />}
            </button>

            <ul className={`${openMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 lg:opacity-100 translate-y-1.5 lg:translate-y-0 invisible lg:visible'} duration-300 absolute lg:sticky bg-gray-900/80 lg:bg-transparent right-0 left-0 menu flex flex-col lg:flex-row items-center p-4 lg:p-0`}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
                <li>
                    <Link href='/'>News</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default NavMenu;