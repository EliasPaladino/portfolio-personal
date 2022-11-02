import React from 'react';
import meImage from '../assets/me.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (
    <div
      name='home'
      className='bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full flex justify-center items-center'
    >
      <div className='max-w-screen-lg gap-6 mx-auto flex flex-col h-full justify-center items-center px-8 md:flex-row md:justify-between'>
        <div className='flex flex-col justify-center md:px-6'>
          <h2 className='text-white text-4xl sm:text-7xl font-bold'>
            Hola, soy un desarrollador Full Stack
          </h2>
          <p className='text-gray-500 max-w-md py-4'>
            Me apasiona el desarrollo web, actualmente utilizo tecnologias como
            React, Java, Tailwind y MySql.
          </p>
          <div>
            <button className='group flex justify-between gap-3 items-center text-white px-2 py-2 my-2 rounded-lg bg-gradient-to-br '>
              <span className=''>Conoceme</span>
              <span className='group-hover:rotate-90 duration-300'>
                <ArrowForwardIcon />
              </span>
            </button>
          </div>
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
