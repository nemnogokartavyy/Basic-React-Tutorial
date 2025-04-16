// ⊗jsrtPmFmsDt

import React, { useState } from 'react';

//3
function App() {

  let dateNow = new Date();

  const [input1, setInput1] = useState(formDate(dateNow));
  const [input2, setInput2] = useState(formDate(dateNow));
  const [result, setResult] = useState(0);

  function func(dateInput1, dateInput2) {
    let date1 = new Date(dateInput1);
    let date2 = new Date(dateInput2);
    setResult(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  }

  function formDate(date) {
    let result = date.toLocaleString().slice(0, 10).split('.').reverse().join('-');
    return result;
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