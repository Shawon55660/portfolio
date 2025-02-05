import React from 'react';
import Heading from './Heading';
// import aboutPic from '../../src/assets/about.jpg'
import { Zoom } from 'react-awesome-reveal';

const About = () => {
    return (
        <div>

            <Heading subheading='main info' heading='about me'></Heading>

            <div className=' lg:grid lg:grid-cols-2 gap-2  justify-start w-10/12 mx-auto '>

                <div className=' max-w-[400px] mx-auto shadow-inner rounded-md'>
                    <img className='w-full p-4 mx-auto shadow-xl rounded-md ' src='/about.jpg' alt="" />
                </div>
              <div className=''>
              <Zoom>
               <div>

                    <p className='text-gray-500 leading-8 my-4 lg:my-0 text-lg'> <span className='font-semibold'>Hi! My name Shawon Ahmed. I am a web Developer.</span> Although I am in this field for 3 years.I mainly use JavaScript and do front-end development with it.I use React JS and love creating Spiderman applications with it. I use MYSQL and I store data with it and know how to query it <br />

                        I specialize in front-end development, but occasionally I also do back-end development.Know how to keep code and applications secure.</p>
                       <div className='mt-12 flex gap-8'>
                        <a target='_blank' href="https://drive.google.com/file/d/1a_CMfLek6YvLH8MgGjP2guyg0apesVyC/view?usp=sharing">
                        <button className= 'py-3 shadow-md px-6 text-green-500 font-semibold rounded-full'>Download CV</button></a>
                         
                        <button className='py-3 shadow-md px-6 text-green-500 font-semibold rounded-full'>Hire me</button>
                </div>
                
                </div>
               </Zoom>
              </div>

            </div>


        </div>
    );
};

export default About;