import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ProjectCards from './ProjectCards';
import project1 from '../../src/assets/project-1.png'
import project2 from '../../src/assets/project-2.png'
import project3 from '../../src/assets/project-3.png'
import project4 from '../../src/assets/project-4.png'
import { Zoom } from 'react-awesome-reveal';

const Project = () => {
    return (
        <div className='w-full md:w-10/12 text-center mx-auto my-12'>
              <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Frontend</Tab>
      <Tab>Fullstack</Tab>
    </TabList>

    <TabPanel>
   <ProjectCards></ProjectCards>

    </TabPanel>
    <TabPanel>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-4'>
                      <Zoom>
                       <div className="card bg-base-100 shadow-xl ">
                                         <figure>
                                             <img
                                                 src={project3}
                                                 alt="Shoes" />
                                         </figure>
                                         <div className="card-body ">
                                             <div>
                                             <h2 className="card-title">
                                             CareeR HuB
                                                 <div className="badge bg-green-400 text-white text-xs ">NEW</div>
                                             </h2>
                                             <p className='py-2 text-gray-600'>Career hub is a frontend project in this project foced on UI desgin with react</p>
                                             </div>
                                             <div className="card-actions justify-end ">
                                                 
                                                 <div className="badge badge-outline"><a target='blank' href="https://career-hub-41553.web.app/">Live Demo</a></div>
                                             </div>
                                         </div>
                                     </div>
                      </Zoom>
                  </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 my-4 gap-4'>
    <div>
                   <Zoom>
                    <div className="card bg-base-100 shadow-xl">
                                       <figure>
                                           <img
                                               src={project4}
                                               alt="Shoes" />
                                       </figure>
                                       <div className="card-body ">
                                           <div><h2 className="card-title">
                                           MediStore
                                           <div className="badge bg-green-400 text-white text-xs ">NEW</div>
                                           </h2>
                                           <p className='text-gray-600 py-2'> MediStore is a fullstack e-commerce web application .  </p></div>
                                           <div className="card-actions justify-end flex-grow">
                                               
                                               <div className="badge badge-outline"><a target='blank' href="https://medistore-ddfa1.web.app/">Live Demo</a></div>
                                           </div>
                                       </div>
                                   </div>
                   </Zoom>
               </div>
               <div>
                   <Zoom>
                    <div className="card bg-base-100 shadow-xl">
                                       <figure>
                                           <img
                                               src={project2}
                                               alt="Shoes" />
                                       </figure>
                                       <div className="card-body ">
                                           <div><h2 className="card-title">
                                           SportGallery
                                           <div className="badge bg-green-400 text-white text-xs ">NEW</div>
                                           </h2>
                                           <p className='text-gray-600 py-2'> SportGallery  is a sport shop were we add equipment and manage our order  </p></div>
                                           <div className="card-actions justify-end flex-grow">
                                               
                                               <div className="badge badge-outline"><a target='blank' href="https://sport-equipment-ff06e.web.app/">Live Demo</a></div>
                                           </div>
                                       </div>
                                   </div>
                   </Zoom>
               </div>
               <div>
                   <Zoom>
                     <div className="card bg-base-100 shadow-xl h-full">
                                       <figure>
                                           <img
                                               src={project1}
                                               alt="Shoes" />
                                       </figure>
                                       <div className="card-body  flex-grow">
                                          <div>
                                          <h2 className="card-title">
                                           Quora BD
                                               <div className="badge bg-green-400 text-white text-xs ">NEW</div>
                                           </h2>
                                           <p className='text-gray-600 py-2 flex-grow'> Quora BD is a fullstack Projct In this wep application search any Info</p>
                                          </div>
                                           <div className="card-actions justify-end flex-grow">
                                           
                                               <div className="badge badge-outline"><a target='blank' href="https://quora-65e79.web.app/">Live Demo</a></div>
                                           </div>
                                       </div>
                                   </div>
                   </Zoom>
               </div>
               
   
           </div>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default Project;