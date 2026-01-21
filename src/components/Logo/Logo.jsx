import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href='/' className='text-center hover:opacity-85 duration-300' title='PrismLens'>
            <h3 className='text-4xl mb-1'>PrismLens</h3>
            <span className='block text-sm'>LensLight Studios</span>
        </Link>
    );
};

export default Logo;