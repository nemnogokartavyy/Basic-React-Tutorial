// ⊗jsrtPmFmsRd

import React, { useState } from 'react';

//2
function App() {

  const [value, setValue] = useState('0');

  let arr = ['js', 'css', 'html'];

  return (
    <>
      <label> Мой любимый ЯП - это JS
        <input type='radio' name='radio' value='0' checked={value === '0' ? true : false} onChange={(event) => setValue(event.target.value)} />
      </label>
      <label> Мой любимый ЯП - это CSS
        <input type='radio' name='radio' value='1' checked={value === '1' ? true : false} onChange={(event) => setValue(event.target.value)} />
      </label>
      <label> Мой любимый ЯП - это HTML
        <input type='radio' name='radio' value='2' checked={value === '2' ? true : false} onChange={(event) => setValue(event.target.value)} />
      </label>
      <p>
        {value === '0' && arr[value]}
        {value === '1' && arr[value]}
        {value === '2' && arr[value]}
      </p>
      <p>
        {value === '0' && 'Молодец!'}
      </p>
    </>
  )

}

export default App;