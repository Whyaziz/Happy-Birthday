'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Enggak() {

    const maxState = 3;
    const defaultState = 1
    const [state, setState] = useState(defaultState);

    const wordsAtas = {
        1: 'IHHH..... \n Kok Jahat Banget Siii',
        2: 'Sedihh loo akuuuu',
        3: 'masaa siii engga sayang ama akuuuu'
    }
    const wordsBawah = {
        1: 'gabolehh atuhh jahat jahat gituuu..',
        2: 'ayang jahat bangetttt',
        3: 'aku kan baik hati raji menabung (tapi boong) dan tidak sombong'
    }
    const url = {
        1: '/jahat_1.png',
        2: '/jahat_2.png',
        3: '/jahat_3.png'
    }

    const handleNextClick = () => {
        // Peningkatan nilai state
        const newState = state + 1;

        // Jika nilai state melebihi panjang maksimum, arahkan ke '/aziz-ask'
        if (newState > maxState) {
            window.location.href = '/aziz-ask';
            setState(defaultState)
        } else {
            setState(newState);
        }
    };

  return (
    <div
     className='min-h-screen w-full flex flex-col justify-center align-middle bg-white px-6 py-8' >
        <p className=' font-bold text-lg text-customPink-500 text-center my-8 mx-20'>
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
