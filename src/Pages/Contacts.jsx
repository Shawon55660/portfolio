import React from 'react';
import Contact from '../AllComponents/Contact';
import SendMessage from '../AllComponents/SendMessage';

const Contacts = () => {
    return (
        <div className='pt-8'>
             <Contact></Contact>
             <SendMessage></SendMessage>
            
        </div>
    );
};

export default Contacts;