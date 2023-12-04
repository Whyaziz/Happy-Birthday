'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    

    // Pengecekan sederhana, misalnya cek username dan password
    if (username.toLowerCase() === 'mia nurul jannah' && password === 'fakyuuuu') {
      // Login berhasil
      alert('Login berhasil!');
      window.location.href = '/aziz-ask';
    } else {
      // Login gagal, atur pesan kesalahan
      setErrorMessage('Salah Sayanggg');
    }
  };

  const backgroundStyle = {
    backgroundImage: `url('/ornamen.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
     className='min-h-screen w-full flex flex-col justify-center align-middle bg-white px-6 py-8' 
     style={backgroundStyle}>
      <div className='flex text-center flex-col'>
        <p className='text-2xl font-bold text-customPink-500'>Login Dulu Yaa Sayangg</p>
      </div>
      <div className='flex w-full justify-center'>
        <Image
        src="/love.png"
        width={251}
        height={261}
        className='w-[251] h-auto'/>
      </div>
      <form onSubmit={handleLogin} className='mt-4'>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-customPink-500'>Nama Lengkap</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full border-gray-300 border rounded-md py-2 px-3 text-customPink-500 focus:outline-none focus:border-customPink-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-customPink-500'>Password</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border-gray-300 border rounded-md py-2 px-3 text-customPink-500 focus:outline-none focus:border-customPink-500'
          />
        </div>
        {errorMessage && (
          <div className='text-customPink-500 text-sm mb-4'>{errorMessage}</div>
        )}
        <button
          type='submit'
          className='bg-customBlue-500 w-full text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none'
        >
          Login
        </button>
      </form>
    </div>
  );
}
