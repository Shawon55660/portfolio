import React, { useContext } from 'react';
import UseAuth from '../hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import '../../src/SharedComponents/navbar.css'

const Navbar = () => {
  const { name, address } = UseAuth();
  const links = (
    <>
      <NavLink className='px-[10px] py-[6px] uppercase' to='/'>Home</NavLink>
      <NavLink className='px-[10px] py-[6px] uppercase' to='/projects'>Projects</NavLink>
      <NavLink className='px-[10px] py-[6px] uppercase' to='/contact'>Contact</NavLink>
    </>
  );

  return (
    <div className="relative">
      <div>
        <div className="navbar fixed top-0 left-0 w-full bg-green-400 z-50">
          <div className="navbar-start pl-3">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" mx-4  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content items-center justify-around  font-semibold text-md gap-4 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a className="border-4 rounded-full py-2 text-white font-bold px-4 text-xl">S</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu gap-6  text-white   font-semibold items-center text-md menu-horizontal ">
              {links}
            </ul>
          </div>
          <div className="navbar-end pr-3">

            <button className="relative px-4 py-2 font-semibold rounded-md overflow-hidden border border-white text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-green-400  hover:before:h-40 hover:before:w-40 ">
              <a target='blank' href="https://drive.google.com/file/d/1wigsagPdS85nbCUopq2arImoRNK-TDF9/view?usp=sharing"> <span className="relative z-10">Download CV</span></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
