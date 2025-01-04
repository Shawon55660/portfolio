import React from 'react';

const Heading = ({subheading,heading}) => {
    return (
        <div className='text-center my-12 space-y-2'>
            <h3 className='uppercase text-xl text-green-400'>{subheading}</h3>
            <h3 className='uppercase text-3xl font-bold'>{heading}</h3>
            
        </div>
    );
};

export default Heading;