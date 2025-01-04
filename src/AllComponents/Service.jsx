import React, { useEffect } from 'react';
import Heading from './Heading';
import { Zoom } from 'react-awesome-reveal';


const Service = () => {
  
    return (
        <div className='w-full md:w-11/12 mx-auto'>
            <Heading subheading='service' heading='what i do'></Heading>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-6'>
               <Zoom>
               <div  className='text-center flex flex-col h-full p-8 shadow-xl rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=14173&format=png&color=01D206" alt="" />
                   </div>
                    <h2 className='text-2xl font-semibold py-2 capitalize'>Responsive design</h2>
                    </div>
                    <p className='flex-grow text-gray-600  pb-12 pt-8'>Responsive Design is a web design method that ensures that a website or web application displays a responsive design for all types of devices and screen sizes.</p>
                </div>
               </Zoom>
                <Zoom>
                <div  className='text-center flex flex-col h-full p-8 shadow-xl rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=85773&format=png&color=01D206" alt="" />
                   </div>
                    <h2 className='text-2xl font-semibold py-2 capitalize'>graphic design
                  </h2>
                    </div>
                    <p className='flex-grow text-gray-600  pb-12 pt-8'>  Graphic design is the activity of creating and conceptualizing visuals, figures, and other mechanical elements in a virtual or printed medium. Graphic design can be related to art, communication, and technology in a variety of ways.</p>
                </div>
                </Zoom>
                <Zoom>
                <div  className='text-center flex flex-col p-8 h-full shadow-xl rounded-md bg-gray-50'>
                    <div className=''>
                   <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                   <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=52203&format=png&color=01D206" alt="" />
                   </div>
                    <h2 className='text-2xl font-semibold py-2 capitalize'>web design
                   </h2>
                    </div>
                    <p className='flex-grow text-gray-600  pb-12 pt-8'>  Web design is the process of establishing a website or web application through perspective, size, position, color, layout, and other elements. It aims to provide an attractive and usable experience to the user.</p>
                </div>
                </Zoom>

            </div>
            
        </div>
    );
};

export default Service;