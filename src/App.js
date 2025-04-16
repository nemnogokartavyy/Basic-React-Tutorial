// ⊗jsrtPmFmsRd

import React, { useState } from 'react';

//1
function App() {

  const [value, setValue] = useState('1');

  return (
    <>
      <input type='radio' name='radio' value='1' checked={value === '1' ? true : false} onChange={(event) => setValue(event.target.value)} />
      <input type='radio' name='radio' value='2' checked={value === '2' ? true : false} onChange={(event) => setValue(event.target.value)} />
      <input type='radio' name='radio' value='3' checked={value === '3' ? true : false} onChange={(event) => setValue(event.target.value)} />
      <p>
        {value}
      </p>
    </>
  )

}

export default App;