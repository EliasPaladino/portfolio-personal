import React from 'react';
import meImage from '../assets/me.webp';

const Home = () => {
  return (
    <div
      name='home'
      className='bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full flex justify-center items-center'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col h-full justify-center items-center px-8 md:flex-row h-80'>
        <div className='flex flex-col justify-center md:px-6'>
          <h2 className='text-white text-4xl sm:text-7xl font-bold'>
            Hola, soy un desarrollador Full Stack
          </h2>
          <p className='text-gray-500 max-w-md py-4'>
            Me apasiona el desarrollo web, actualmente utilizo tecnologias como
            React, Java, Tailwind y MySql.
          </p>
          3
        </div>
        <div className='max-w-full'>
          <img
            src={meImage}
            alt='my personal portfolio'
            className='rounded-3xl mx-auto w-3/4 max-w-full max-h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
