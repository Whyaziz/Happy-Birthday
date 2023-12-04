'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [countdown, setCountdown] = useState(3); // Menitkan countdown dari 3 detik

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redirect ke halaman login setelah 3 detik
      window.location.href = '/login';
    }, 3000);

    // Mengurangkan countdown setiap detik
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Membersihkan timeout dan interval saat komponen dibongkar
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []); // useEffect hanya dijalankan sekali setelah render pertama

  const backgroundStyle = {
    backgroundImage: `url('/ornamen.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
     className='min-h-screen w-full flex flex-col justify-center align-middle text-customPink-500 bg-white px-6 py-8 text-center' 
     style={backgroundStyle}>
      <p>Kok sampe halaman ini sii ayy, ini tu kosong tauuu, Masuk Login ajaaa....</p>
      <p>Sebentar yaa : {countdown} detik</p>
    </div>
  );
}
