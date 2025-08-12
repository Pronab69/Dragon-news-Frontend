import React from 'react';
import Head from './Head';
import News from './News';

const Middle = () => {
    return (
        <div className='w-10/12 mx-auto mt-5'>
            <Head></Head>
            <News></News>
            
        </div>
    );
};

export default Middle;