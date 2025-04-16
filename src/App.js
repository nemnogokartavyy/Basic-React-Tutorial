// ⊗jsrtPmFmsChI

import React, { useState } from 'react';

//1
function App() {

  const [checked, setChecked] = useState(false);
  const [text, setText] = useState();

  return (
    <>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <button onClick={() => { checked ? setText('Привет пользователь!') : setText('Пока пользователь!') }}>Click</button>
      <p>{text}</p>
    </>
  )
  
}

export default App;