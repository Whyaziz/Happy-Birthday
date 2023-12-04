'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Iyaa() {

    const maxState = 2;
    const defaultState = 1
    const [state, setState] = useState(defaultState);

    const wordsAtas = {
        1: 'yeyyyyy... \n Makasii Sayangkuuuu',
        2: 'Jadi tuu Aku Cuma Mau Bilang \n Happy Birthday Sayangggg'
    }
    const wordsBawah = {
        1: 'aku juga sayang bangettt \n jadi jangan jauh-jauh dari aku yaa',
        2: 'Semoga ayang lebih bahagia dan juga nemuin passion ayang di semester 4 ini tentu juga semoga dihindarkan dari MAGER WKWKWKWK Pokoknya wish you all the best lahhh buat sayangkuu yang paling cantik dan lucu iniii'
    }
    const url = {
        1: '/love.png',
        2: '/happy.png',
    }

    const handleNextClick = () => {
        // Peningkatan nilai state
        const newState = state + 1;

        // Jika nilai state melebihi panjang maksimum, arahkan ke '/aziz-ask'
        if (newState > maxState) {
            window.location.href = '/happy-birthday';
            setState(defaultState)
        } else {
            setState(newState);
        }
    };

  return (
    <div
     className='min-h-screen w-full flex flex-col justify-center align-middle bg-white px-6 py-8' >
        <p className=' font-bold text-lg text-customPink-500 text-center my-8 mx-16'>
            {wordsAtas[state]}
        </p>
        <div className='flex w-full justify-center'>
            <Image
            src={url[state]}
            width={251}
            height={261}
            className='w-[251] h-auto'/>
        </div>
        <p className=' font-bold text-lg text-customPink-500 text-center my-8 mx-16'>
            {wordsBawah[state]}
        </p>
        <div className='flex flex-row justify-center mx-2 my-8'>
            <button 
             onClick={handleNextClick}
             className='lg:mx-2 font-bold text-lg bg-customBlue-500 text-white px-4 py-3 rounded-lg min-w-[10rem]'>{'Next ->'}</button>
        </div>
    </div>
  );
}
