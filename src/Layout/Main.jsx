import React from 'react';
import Navbar from '../SharedComponents/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../AllComponents/Contact';
import SendMessage from '../AllComponents/SendMessage';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-12'>
            <Outlet></Outlet>
            </div>
           
            
            
        </div>
    );
};

export default Main;