import React from 'react';
import Heading from './Heading';
import { JackInTheBox, Zoom } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <div>
            <Heading subheading='contact' heading='Get In Touch'></Heading>

            <div className='grid md:grid-cols-2 w-11/12  lg:grid-cols-3 gap-8 md:w-10/12 my-8 mx-auto'>
            <Zoom><div className='text-center flex flex-col p-4 shadow-lg rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=14181&format=png&color=00AA06" alt="" />
                   
                   </div>
                    <h2 className='text-xl font-semibold text-gray-700 py-2 capitalize'>Phone</h2>
                    </div>
                    <p className=' text-gray-600 font-mono py-1'>+80001799731161</p>
                </div></Zoom>
                <Zoom><div className='text-center flex flex-col p-4 shadow-lg rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=60688&format=png&color=00AA06" alt="" />
                   
                   </div>
                    <h2 className='text-xl font-semibold text-gray-700 py-2 capitalize'>Email</h2>
                    </div>
                    <p className=' text-gray-600 font-mono py-1'>shawonahmed55660@gmail.com</p>
                </div></Zoom>
                <Zoom><div className='text-center flex flex-col p-4 shadow-lg rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=53430&format=png&color=00AA06" alt="" />
                   
                   </div>
                    <h2 className='text-xl font-semibold text-gray-700 py-2 capitalize'>Address</h2>
                    </div>
                    <p className=' text-gray-600 font-mono py-1'>Satbaria,Bheramara,Kushtia</p>
                </div></Zoom>
               
            </div>
        </div>
    );
};

export default Contact;