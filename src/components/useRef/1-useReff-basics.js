import React, { useState, useRef, useEffect } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
