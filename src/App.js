// ⊗jsrtPmFmsII

import React, { useState } from 'react';

//1
function App() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <input value={input2} onChange={event => setInput2(event.target.value)} />
      <p>{input1}</p>
      <p>{input2}</p>
    </>
  )

}

export default App;