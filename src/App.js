// ⊗jsrtPmFmsTx

import React, { useState } from 'react';

//2
function App() {

  const [value, setValue] = useState(`1
2
3
4
5`);
  const [res, setRes] = useState();

  function func(value) {
    setRes(value.split(/\s/).reduce((acc, elem) => acc += +elem, 0));
  }

  return (
    <>
      <textarea value={value} onChange={(event) => { setValue(event.target.value); func(event.target.value) }} />

      <p>
        {res}
      </p>
    </>
  )

}

export default App;