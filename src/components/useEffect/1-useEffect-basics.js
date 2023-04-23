import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  useEffect(()=> {
    if (value === 0) {
      document.title = `new messages`
    } else {
      document.title = `new messages(${value})`
    }
  }, [value]);
  return (
    <>
    <h2>Use Effect</h2>
    <h1>{value}</h1>
    <button 
      className='btn' 
      onClick={()=>{setValue(value+1)}}>
        increase
    </button>
    </>
  )
}

export default UseEffectBasics;
