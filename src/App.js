// ⊗jsrtPmFmsIS

import React, { useState } from 'react';

//1
function App() {

  const [input1, setInput1] = useState(1);
  const [input2, setInput2] = useState(2);
  const [input3, setInput3] = useState(3);
  const [input4, setInput4] = useState(4);
  const [input5, setInput5] = useState(5);

  function sum(num1, num2, num3, num4, num5) {
    let arr = [num1, num2, num3, num4, num5];
    let sum = arr.reduce((acc, elem) => acc += +elem, 0);
    return sum / arr.length;
  }

  return (
    <>
      <input value={input1} onChange={(event) => { setInput1(event.target.value) }} />
      <input value={input2} onChange={(event) => { setInput2(event.target.value) }} />
      <input value={input3} onChange={(event) => { setInput3(event.target.value) }} />
      <input value={input4} onChange={(event) => { setInput4(event.target.value) }} />
      <input value={input5} onChange={(event) => { setInput5(event.target.value) }} />
      <p>Среднее арифметическое: {sum(input1, input2, input3, input4, input5)}</p>
    </>
  )

}

export default App;