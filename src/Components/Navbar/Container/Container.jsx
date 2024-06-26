import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-6 lg:px-0 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;