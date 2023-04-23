import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
     <h1>{firstValue}</h1>
     <h1>Value: {secondValue}</h1>
     <h1>{text || 'john doe'}</h1>
     <h1>{text && 'hello world'}</h1>
     <button></button>
    </>
  )
}

export default ShortCircuit;
