import React, { useEffect } from 'react';
import profile from '../../src/assets/profile-1-pic.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bounce, Slide } from 'react-awesome-reveal';
import Animation1 from '../Animation/Animation1';
import Animation2 from '../Animation/Animation2';

const Bannar = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS animations
    }, []);
    return (
        <div>
            <div className='relative mx-auto py-2 flex flex-col-reverse md:flex-row md:w-10/12 justify-around  items-center min-h-[85vh] '>
           <div className='absolute top-24 left-1'>
           <p className='h-8 w-8 absolute  rounded-full border-2 border-red-500 animate-ping duration-100'></p>
            <p className='h-4 w-4 absolute  rounded-full border-2 border-red-500 animate-ping duration-100'></p>
            <p className='h-6 w-6 absolute rounded-full border-2 border-red-500 animate-ping duration-100'></p>
            <p className='h-10 w-10 absolute rounded-full border-2 border-red-500 animate-ping duration-100'></p>
           </div>

                
            <div className='absolute right-0'>
            <p className='h-10 w-10  absolute right-2 bottom-2 border-2 	 border-green-400 animate-spin duration-100'></p>
           
            </div>
            <div className='absolute left-2 bottom-0'>
            <Animation1></Animation1>
            </div>
            {/* <div className='absolute right-4 md:right-[20%] bottom-0'>
                <Animation2></Animation2>
            </div> */}

                <Slide>
                    <div data-aos="zoom-in" className='space-y-4 '>

                        <span className='text-gray-400 text-lg'>Hello,</span>
                        <h1 className='text-5xl font-semibold'>I'm Shawon</h1>
                        <p className='text-xl font-semibold text-gray-400'>Frontend Web Developer</p>

                        <button className="relative px-4 py-2 font-semibold rounded-md overflow-hidden border border-green-400 text-green-400 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-400 before:duration-300 before:ease-out hover:text-white hover:before:h-40 hover:before:w-40 ">
                            <a  target='_blank' href="https://drive.google.com/file/d/1wigsagPdS85nbCUopq2arImoRNK-TDF9/view?usp=sharing"> <span className="relative z-10">Download CV</span></a>
                        </button>
                        <ul className='flex gap-2'>
                            <li>
                                <a target='blank' className='shadow-inner hover:shadow-md rounded-full' href="https://www.linkedin.com/in/shawon-ahmed-4b091b1a4/">
                                <img className='w-12 p-2 shadow-md hover:shadow-inner transition-all rounded-full' src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
                                </a>
                                </li>
                                <li>
                                <a target='blank' className='shadow-inner hover:shadow-md rounded-full' href="https://github.com/Shawon55660">
                                <img className='w-12 p-2 shadow-md hover:shadow-inner transition-all rounded-full' src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" />
                                </a>
                                </li>
                                <li>
                                <a target='blank' className='shadow-inner hover:shadow-md rounded-full' href="https://web.whatsapp.com/">
                                <img className='w-12 p-2 shadow-md hover:shadow-inner transition-all rounded-full' src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" />
                                </a>
                                </li>
                                <li>
                                <a target='blank' className='shadow-inner hover:shadow-md rounded-full' href="https://www.facebook.com/shawon56660">
                                <img className='w-12 p-2 shadow-md hover:shadow-inner transition-all rounded-full' src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                                </a>
                                </li>
                        </ul>

                    </div>
                </Slide>
                <div>
                    <Bounce>
                        <div className=' max-w-[200px] rounded-full  shadow-inner   max-h-[200px] md:max-w-[300px] md:max-h-[300px]'>
                            <img className='w-full h-full p-3 shadow-md   mx-auto rounded-full' src='/profile.png' alt="" />
                        </div>
                    </Bounce>

                </div>
            </div>

        </div>
    );
};

export default Bannar;