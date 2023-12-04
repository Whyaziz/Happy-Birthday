'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Happy() {

    const backgroundStyle = {
        backgroundImage: `url('/bg_happyBirthday.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div>
        <div
         className='min-h-screen w-full flex flex-col justify-center align-middle bg-white px-6 py-8' 
         style={backgroundStyle}>
            <div className='flex justify-center p-6'>
                <iframe
                    width="1000"
                    height="1000"
                    src="https://www.youtube.com/embed/Gm-F5wJMIkc"
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                    className='w-auto h-full justify-center'
                ></iframe>
            </div>
            
        </div>
        <Image
                width={1000} 
                height={1000}
                src={'/baloon.png'}
                className='absolute w-full h-auto bottom-0'/>
    </div>
  );
}
