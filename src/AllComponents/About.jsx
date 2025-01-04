import React from 'react';
import Heading from './Heading';
import aboutPic from '../../src/assets/about.jpg'
import { Zoom } from 'react-awesome-reveal';

const About = () => {
    return (
        <div>

            <Heading subheading='main info' heading='about me'></Heading>

            <div className='lg:flex gap-12  w-10/12 mx-auto '>

                <div className='max-w-[400px] mx-auto shadow-inner rounded-md'>
                    <img className='w-full p-4 mx-auto shadow-xl rounded-md ' src={aboutPic} alt="" />
                </div>
               <Zoom>
               <div>
                    <p className='text-gray-500 leading-8 my-4 lg:my-0 text-lg'> <span className='font-semibold'>Hi! My name Shawon Ahmed. I am a web Developer.</span> Although I am in this field for 3 years.I mainly use JavaScript and do front-end development with it.I use React JS and love creating Spiderman applications with it. I use MYSQL and I store data with it and know how to query it <br />

                        I specialize in front-end development, but occasionally I also do back-end development.Know how to keep code and applications secure.</p>
                       <div className='mt-12 flex gap-8'>
                         <button className= 'py-3 shadow-md px-6 text-green-500 font-semibold rounded-full'>Download CV</button>
                        <button className='py-3 shadow-md px-6 text-green-500 font-semibold rounded-full'>Hire me</button>
                </div></div>
               </Zoom>
            </div>


        </div>
    );
};

export default About;