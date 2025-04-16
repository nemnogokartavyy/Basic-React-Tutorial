// ⊗jsrtPmFmsDt

import React, { useState } from 'react';

//2
function App() {

  const [input1, setInput1] = useState('2025-12-31');
  const [input2, setInput2] = useState('2024-12-31');
  const [result, setResult] = useState(0);

  function func(dateInput1, dateInput2) {
    let date1 = new Date(dateInput1);
    let date2 = new Date(dateInput2);
    setResult(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  }

  return (
    <>
      <input value={input1} onChange={(event) => { setInput1(event.target.value) }} />
      <input value={input2} onChange={(event) => { setInput2(event.target.value) }} />

      <button onClick={() => func(input1, input2)}>ClickSum</button>

      <p>
        Разница между датами в днях: {result}.
      </p>
    </>
  )

}

export default App;