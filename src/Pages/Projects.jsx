import React from 'react';
import Project from '../AllComponents/Project';
import Contact from '../AllComponents/Contact';
import SendMessage from '../AllComponents/SendMessage';

const Projects = () => {
    return (
        <div className='mt-24'>
            <Project></Project>
            <Contact></Contact>
            <SendMessage></SendMessage>
            
        </div>
    );
};

export default Projects;