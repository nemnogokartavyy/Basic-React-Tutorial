// ⊗jsrtPmFmsIO

import React, { useState } from 'react';

//1
function App() {

  const [input, setInput] = useState('');

  function func(value) {
    return value.split('').length;
  }

  return (
    <>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <p>{func(input)}</p>
    </>
  )

}

export default App;