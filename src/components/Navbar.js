import React, { useState } from 'react';
import Logo from "../Images/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
          <h1 className="text-lg font-semibold ml-2">Your Brand</h1>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`md:flex md:flex-row md:gap-7 items-center justify-center md:justify-end ${menuOpen ? 'block' : 'hidden'}`}>
          <p className='cursor-pointer mt-4 md:mt-0'>Home</p>
          <p className='cursor-pointer mt-4 md:mt-0'>Flashcard</p>
          <p className='cursor-pointer mt-4 md:mt-0'>Contact</p>
          <p className='cursor-pointer mt-4 md:mt-0'>FAQ</p>
          <div>
      <button
        className="px-6 py-1 text-white rounded-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mt-4 md:mt-0"
        onClick={handleToggleModal}
      >
        Login
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className='flex gap-5'>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign in
              </button>
              <button className='mt-3 bg-red-500 px-5 py-1 text-white rounded-sm' onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
