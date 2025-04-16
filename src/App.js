// ⊗jsrtPmFmsDt

import React, { useState } from 'react';

//1
function App() {

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);


  function sum(num1, num2) {
    setResult(+num1 + +num2);
  }

  function mul(num1, num2) {
    setResult(num1 * num2);
  }


  return (
    <>
      <input value={input1} onChange={(event) => { setInput1(event.target.value) }} />
      <input value={input2} onChange={(event) => { setInput2(event.target.value) }} />
      
      <button onClick={() => sum(input1, input2)}>ClickSum</button>
      <button onClick={() => mul(input1, input2)}>ClickMul</button>

      <p>
        {result}
      </p>
    </>
  )

}

export default App;