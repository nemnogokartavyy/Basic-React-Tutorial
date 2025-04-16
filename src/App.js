// ⊗jsrtPmFmsAIB

import React, { useState } from 'react';

//1
function App() {

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [notes, setNotes] = useState(arr);
  let sum = 0;

  const inputs = notes.map((note, index) => {
    return <input
      key={index}
      value={note}
      onChange={event => change(index, event)}
    />;
  });

  function change(index, event) {
    setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)])
  }

  function averageArithmetic(arr) {
    sum = arr.reduce((acc, elem) => acc += +elem, 0) / arr.length;
    return sum;
  }

  return (
    <>
      {inputs};
      <p>{averageArithmetic(notes)}</p>
    </>
  )

}

export default App;