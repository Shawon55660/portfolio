import React, { useEffect } from 'react';
import Heading from './Heading';
import { Zoom } from 'react-awesome-reveal';


const Service = () => {

    return (
        <div className='w-full md:w-11/12 mx-auto'>
            <Heading subheading='service' heading='what i do'></Heading>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-6'>
                <Zoom>
                    <div className='text-center flex flex-col h-full p-8 shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                                <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=14173&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>Frontend Development</h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'>Custom Website Development.Single Page Applications (SPA).Responsive Web Design (Tailwind CSS, Bootstrap).Dark/Light Mode Implementation.Landing Page Design,Portfolio Website Creation</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='text-center flex flex-col h-full p-8 shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                                <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=85773&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>Full-Stack Web Development
                            </h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'>  MERN Stack Development (MongoDB, Express.js, React.js, Node.js)
                            E-commerce Website Development
                            Admin Dashboard Development</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='text-center flex flex-col p-8 h-full shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                                <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=52203&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>Bug Fixing & Code Optimization
                            </h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'> React.js Component Optimization
                            Website Performance Improvement
                            Fixing Responsive Issues
                            Debugging JavaScript & API Errors</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='text-center flex flex-col p-8 h-full shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                            <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=85773&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>API Integration & Third-party Services
                            </h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'> Payment Gateway Integration (Stripe, PayPal)
                            Google Maps API Integration
                            Social Media API Integration (Facebook, Twitter, Instagram)
                            Firebase Features Integration (Auth, Firestore, Hosting)</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='text-center flex flex-col p-8 h-full shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                                <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=52203&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>Website Deployment & Hosting
                            </h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'> Deploy React Apps to Firebase, Vercel, Netlify
                            Custom Domain Setup
                            CI/CD Pipeline Setup (GitHub Actions, Vercel)</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='text-center flex flex-col p-8 h-full shadow-xl rounded-md bg-gray-50'>
                        <div className=''>
                            <div className='bg-white w-12 mx-auto rounded-full shadow-inner transition-all hover:shadow-xl'>
                            <img className='mx-auto w-full shadow-inner rounded-full    p-2' src="https://img.icons8.com/?size=100&id=14173&format=png&color=4ade80" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold py-2 capitalize'>Website Maintenance & Support
                            </h2>
                        </div>
                        <p className='flex-grow text-gray-600  pb-12 pt-8'>Monthly Maintenance Packages
Website Speed Optimization
Security Enhancements</p>
                    </div>
                </Zoom>

            </div>

        </div>
    );
};

export default Service;