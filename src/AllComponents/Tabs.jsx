import React, { useEffect, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Tabs = () => {
    const [style, setStyle] = useState('Skills')
    const handleStyle = (tabName) => {
         setStyle(tabName)
    }
    
   
    return (
        <div className='    my-12'>

            <div role="tablist" className="tabs  w-10/12 mx-auto  tabs-bordered">
                <input onClick={() => handleStyle('Skills')} type="radio" name="my_tabs_1" role="tab" className={`tab font-semibold ${style == 'Skills' ? 'bg-green-400  text-white rounded-md  shadow-2xl  ' : ''}`} aria-label="Skills" defaultChecked />
                <div role="tabpanel" className="tab-content w-full  py-10">
                   <Slide>
                   <div className='md:flex gap-6'>

<div className='w-full'>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >HTML</label>
            <label >100%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={100} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >Next Js</label>
            <label >80%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={80} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >Tailwind</label>
            <label >97%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={97} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >Boostrap</label>
            <label >80%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={80} max="100"></progress></p>
    </div>
</div>
<div className='w-full'>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >JavaScript</label>
            <label >80%</label>
        </div>

        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={80} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >React JS</label>
            <label >90%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={90} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >Express JS</label>
            <label >60%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={60} max="100"></progress></p>
    </div>
    <div>
        <div className='flex font-semibold text-gray-600 justify-between mx-2 my-2'>
            <label >Mongo BD</label>
            <label >50%</label>
        </div>
        <p className='py-[1px] px-2 rounded-full shadow-inner'><progress className="progress  " value={50} max="100"></progress></p>
    </div>
</div>
</div>
                   </Slide>

                </div>

                <input onClick={() => handleStyle('Experience')} type="radio" name="my_tabs_1" role="tab" className={`tab font-semibold ${style == 'Experience' ? 'bg-green-400  text-white rounded-md  shadow-2xl  ' : ''}`} aria-label="Experience"  />
                <div role="tabpanel" className="tab-content my-12 w-full">

                    <Zoom>
                    <ul className="md:timeline md:timeline-vertical">
                        <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[30px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=123839&format=png&color=4ade80" alt="" />
                            </div>

                            <div className="timeline-start timeline-box">

                                <p className='text-md font-semibold mb-4 text-green-400'>Sep ,2020 - present</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>full stack Developer</h2>
                                <p className='text-lg font-semibold text-gray-600 pb-3'>skill development institution,bangladesh</p>
                                <p className='text-gray-600'>Bangladesh Skill Development Institute (BSDI) is a leading organization in the field of education and training, established in 2003 as a part of the Daffodil Education Network. With a mission to develop professional human resources in various fields, BSDI has been at the forefront of providing innovative and high-quality training programs to meet the needs of the rapidly changing job market.</p>
                            </div>
                            <hr />

                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[30px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=123839&format=png&color=4ade80" alt="" />
                            </div>
                            <div className="timeline-end timeline-box">


                                <p className='text-md font-semibold mb-4 text-green-400'>Sep ,2019 - 2020


</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Graphic Desginer</h2>
                                <p className='text-lg font-semibold text-gray-600 pb-3'>Computer Space Institute, Kushtia</p>
                                <p className='text-gray-600'>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
                            </div>
                           
                            <hr />


                        </li>


                        <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[30px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=123839&format=png&color=4ade80" alt="" />
                            </div>

                            <div className="timeline-start timeline-box">

                                <p className='text-md font-semibold mb-4 text-green-400'>Sep ,2018 - 2019


</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Computer Application</h2>
                                <p className='text-lg font-semibold text-gray-600 pb-3'>Computer Space Institute, Kushtia</p>
                                <p className='text-gray-600'> Computer skills at work refer to the knowledge and ability to use various digital tools and technologies to complete job tasks efficiently and effectively. These skills can include: The ability to use a computer, navigate the internet, and use common software applications such as Microsoft Office. </p>
                            </div>
                            <hr />

                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle py-2 ">
                                <img className='w-[30px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=123839&format=png&color=4ade80" alt="" />
                            </div>

                            <div className="timeline-end timeline-box">

                                <p className='text-md font-semibold mb-4 text-green-400'>Aug ,2019- 2024

</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Student</h2>
                                <p className='text-lg font-semibold text-gray-600 pb-3'>
                                KPI ,bangladesh</p>
                                <p className='text-gray-600'>kushtia polytechnic institution ,CSE student session 2019-2020.Compelete Deploma with GCPA 3.76.</p>
                            </div>
                            <hr />

                        </li>
                    </ul>
                    </Zoom>
                </div>

                <input onClick={() => handleStyle('Education')} type="radio" name="my_tabs_1" role="tab" className={`tab font-semibold ${style == 'Education' ? 'bg-green-400  text-white rounded-md  shadow-2xl  ' : ''}`} aria-label="Education" />
                <div role="tabpanel" className="tab-content w-full  my-12">

               <Slide>
               <ul className="md:timeline  md:timeline-vertical">
                <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[40px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=40569&format=png&color=4ade80" alt="" />
                            </div>
                            <div className="timeline-start shadow-md timeline-box">


                            <p className='text-md font-semibold mb-4 text-green-400'>2019 - 2023

</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Deploma In Computer Enginnerring </h2>
                                <p className='text-gray-600 py-2'>Deploma In Computer Enginnerring in this sector very enjoy for life for me because .In this cse department best for me</p>
                            </div>
                           
                            <hr />


                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[40px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=40569&format=png&color=4ade80" alt="" />
                            </div>
                            <div className="timeline-end shadow-md timeline-box">


                            <p className='text-md font-semibold mb-4 text-green-400'>2018 - 2019

 </p>
                                <h2 className='capitalize text-xl font-bold pb-1'> Secondary School Certificate</h2>
                                <p className='text-gray-600 py-2'> Secondary school Certificate (SSC) result .I have got GPA 4.67 and the result is very sad for me</p>
                            </div>
                           
                            <hr />


                        </li>


                        <li>
                            <hr />
                            <div className="timeline-middle py-2">
                                <img className='w-[40px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=40569&format=png&color=4ade80" alt="" />
                            </div>

                            <div className="timeline-start shadow-md timeline-box">

                            <p className='text-md font-semibold mb-4 text-green-400'>2016 - 2017

</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Junior School Certificate</h2>
                                <p className='text-gray-600 py-2'>Junior school Certificate (JSC) result .I have got GPA 4.90 and the result is not good for me</p>
                            </div>
                            <hr />

                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle py-2 ">
                                <img className='w-[40px] mx-2 text-green-400' src="https://img.icons8.com/?size=100&id=40569&format=png&color=4ade80" alt="" />
                            </div>

                            <div className="timeline-end shadow-md timeline-box">

                                <p className='text-md font-semibold mb-4 text-green-400'>2012-2013</p>
                                <h2 className='capitalize text-xl font-bold pb-1'>Primary School Certificate</h2>
                                <p className='text-gray-600 py-2'>primary school Certificate PSC result .I have got GPA 5.00 and the result is good for this time</p>


                            </div>
                            <hr />

                        </li>
                    </ul>
               </Slide>
                </div>
            </div>

        </div>
    );
};

export default Tabs;