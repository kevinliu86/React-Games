import React from 'react';

const Tictac = () =>{
  const scoreStorage = localStorage.getItem('score');

  return(
    <div className='mainpage'>
      
      <h2>Tictac Page</h2>
      <button onClick={()=>{localStorage.setItem('score', scoreStorage-1)}}>WIN</button>
    </div>
  );
}
export default Tictac;