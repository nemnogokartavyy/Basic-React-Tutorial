// ⊗jsrtPmFmsDt

import React, { useState } from 'react';

//4
function App() {

  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  function sum(number) {
    setResult(number.split('').reduce((acc, elem) => acc += + elem, 0));
  }

  return (
    <>
      <input type='number' value={input}
        onChange={(event) => { setInput(event.target.value) }}
        onBlur={() => sum(input)}
      />

      <p>
        Сумма цифр числа: {result}.
      </p>
    </>
  )

}

export default App;