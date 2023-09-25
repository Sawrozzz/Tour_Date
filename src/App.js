import React from 'react'
import Month from './Month'
import Header from './Header';
import Cards from './Cards';

function App(){
  return (

   <>
   <div className='main'>
   <Header />
   <br></br>
   <hr></hr>
    <Month />
    <br></br>
   <Cards />
   </div>
   </>
 
  );
}

export default App