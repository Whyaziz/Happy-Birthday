'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Ask() {

  const handleYesClick = () => {
    // Logika ketika tombol "Iyaa Dong" diklik
    // Menggunakan window.location.href untuk mengganti lokasi halaman
    window.location.href = '/iyaa';
  };

  const handleNoClick = () => {
    // Logika ketika tombol "ENGGAKKK" diklik
    // Menggunakan window.location.href untuk mengganti lokasi halaman
    window.location.href = '/enggakk';
  };

  return (
    <div
      className='min-h-screen w-full flex flex-col justify-center align-middle bg-white px-6 py-8' >
      <p className='font-bold text-lg text-customPink-500 text-center my-8 mx-20'>
        Halo Sayangkuuu, Gimana Kabarnyaa?
      </p>
      <div className='flex w-full justify-center'>
        <Image
          src="/ask.png"
          width={251}
          height={261}
          className='w-[251] h-auto'/>
      </div>
      <p className='font-bold text-lg text-customPink-500 text-center my-8 mx-16'>
        Sebelumnya aku mau nanya nii.. Ayang Sayang ama aku enggaa?
      </p>
      <div className='flex flex-row justify-between mx-2 my-8 lg:justify-center'>
        <button
          onClick={handleYesClick}
          className='lg:mx-2 font-bold text-lg bg-customBlue-500 text-white px-4 py-3 rounded-lg min-w-[10rem]'>
          Iyaa Dong
        </button>
        <button
          onClick={handleNoClick}
          className='lg:mx-2 font-bold text-lg border-4 border-customPink-500 text-customPink-500 px-4 py-3 rounded-lg min-w-[10rem]'>
          ENGGAKKK
        </button>
      </div>
    </div>
  );
}
