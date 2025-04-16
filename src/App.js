// ⊗jsrtPmFmsIF

import React, { useState } from 'react';

//2
function App() {

  const [degC, setDegC] = useState(0);

  function getYearBirth(event) {
    setDegC(event.target.value);
  }

  function getDegF(c) {
    return (c - 32) * 5 / 9;
  }

  return (
    <>
      <input value={degC} type='number' onChange={getYearBirth} />

      <p>
        Градусы цельсия: {getDegF(degC)}
      </p>
    </>
  )

}

export default App;