// ⊗jsrtPmFmsDt

import React, { useState } from 'react';

//5
function App() {

  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  function mulDivisors(number) {
    setResult(getDivisors(number).reduce((acc, elem) => acc *= elem, 1));
  }

  function getDivisors(number) {
    let arrDivisors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        arrDivisors.push(i);
      }
    }
    return arrDivisors;
  }

  return (
    <>
      <input type='number' value={input}
        onChange={(event) => { setInput(event.target.value) }}
        onBlur={() => mulDivisors(input)}
      />

      <p>
        Произведение делителей введенного числа: {result}.
      </p>
    </>
  )

}

export default App;