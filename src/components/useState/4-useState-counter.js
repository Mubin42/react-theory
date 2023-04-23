import React, { useState} from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  
  const complexIncrease = () => {
    setTimeout(()=>{

      setValue2((prevState)=>{
        return prevState + 1;
      });
    }, 2000)
  }

  const complexDecrease = () => {
    setTimeout(()=>{

      setValue2((prevState)=>{
        return prevState - 1;
      });
    }, 2000)
  }

  const complexReset = () => {
    setTimeout(()=>{
      setValue2(0);
    }, 2000)
  }
  return (
    <>
      <section style={{margin: '4rem'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button  
          className='btn' 
          onClick={
            () => setValue(value-1)
            }>
              decrease
         </button>
        

         <button 
          className='btn' 
          onClick={
            () => setValue(0)
            }>
              reset
         </button>
        
         <button 
        className='btn' 
        onClick={complexReset}>
            increase
          </button>
      </section>


      <section style={{margin: '4rem'}}>
        <h2>complex counter</h2>
        <h1>{value2}</h1>

        <button 
          className='btn' 
          onClick={complexDecrease}>
              decrease
         </button>
        

         <button 
          className='btn' 
          onClick={
            () => setValue(0)
            }>
              reset
         </button>
        
         <button 
        className='btn' 
        onClick={complexIncrease}>
            increase
          </button>
      </section>
    </>
  )
}

export default UseStateCounter;
