import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: 'inicio',
    },
    {
      id: 2,
      link: 'sobre mí',
    },
    {
      id: 3,
      link: 'habilidades',
    },
    {
      id: 4,
      link: 'proyectos',
    },
    {
      id: 5,
      link: 'contacto',
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center bg-black px-4 w-full h-20 text-white fixed'>
      <div>Hola</div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            className='px-4 font-medium capitalize text-gray-500 hover:scale-110 duration-200 cursor-pointer'
            key={id}
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        className='cursor-pointer text-gray-500 hover:scale-110 duration-200 z-10 md:hidden'
        onClick={() => setNav(!nav)}
      >
        {nav ? <CloseIcon /> : <MenuIcon />}
      </div>

      {nav && (
        <ul className='flex flex-col md:hidden absolute top-0 left-0 w-full justify-center items-center bg-gradient-to-b from-black to-gray-800 h-screen'>
          {links.map(({ id, link }) => (
            <li
              className='py-6 text-4xl font-medium capitalize text-gray-500 hover:scale-110 duration-200 cursor-pointer'
              key={id}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
