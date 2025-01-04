import React from 'react';
import Bannar from '../AllComponents/Bannar';
import About from '../AllComponents/About';
import Tabs from '../AllComponents/Tabs';
import Service from '../AllComponents/Service';
import Contact from '../AllComponents/Contact';
import SendMessage from '../AllComponents/SendMessage';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Tabs></Tabs>
            <Service></Service>
            <Contact></Contact>
            <SendMessage></SendMessage>
           

            
        </div>
    );
};

export default Home;