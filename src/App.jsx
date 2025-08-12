import React from 'react';
import Nav from './components/Nav';
import Middle from './components/Middle';
import Breakmar from './components/Breakmar';

const App = () => {
  return (
    <>    <Nav></Nav>
          <div className='w-10/12 flex items-center mt-2 mx-auto bg-base-300'>
            
            <h5 className='bg-[#D72050] px-3 py-1 text-bold text-white'>Latest</h5>

 <Breakmar></Breakmar>
            </div>
    <Middle></Middle></>

  );
};

export default App;