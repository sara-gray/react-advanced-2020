import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('sara');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value : {secondValue}</h1> */}
      <h1>{text || 'hello world'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {/* {isError && <h2>Error...</h2>} */}
      {isError ? <h2>Error...</h2> : <h2>No error</h2>}
    </>
  );
};

export default ShortCircuit;
