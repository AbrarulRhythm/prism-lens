import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='hero-content md:pt-12'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 items-center'>
                    <div className='w-full lg:w-7/12 px-3'>
                        <h1 className='text-3xl md:text-[40px] lg:text-5xl 2xl:text-[52px] font-bold leading-[1.6] max-w-154.5 mb-7'>Capturing Moments, Telling Stories</h1>
                        <div className='flex items-center gap-4 text-sm md:text-base mb-12'>
                            <span className='uppercase'>See More</span>
                            <div className='w-20 md:w-33 h-0.5 bg-white'></div>
                            <span className='uppercase w-36.75 block'>Welcome to our website</span>
                        </div>
                        <p className='lg:max-w-103 leading-[1.8]'>{`Every picture tells a unique story, capturing the beauty of life's fleeting moments. At PrismLens, we bring your memories to life with vibrant, timeless photography.`}</p>
                    </div>
                    <div className='w-full lg:w-5/12 px-3 relative mt-8 lg:mt-0'>
                        <div>
                            <Image
                                src='/hero-02.png'
                                alt='hero image'
                                width={510}
                                height={577}
                                className='static md:absolute lg:-ml-54 -z-10'
                            ></Image>
                            <div className='absolute md:static bottom-0 flex justify-end'>
                                <Image
                                    src='/hero-01.png'
                                    alt='hero image'
                                    width={388}
                                    height={462}
                                    className='mlt-0 md:mt-74.5 p-20 md:p-0'
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;