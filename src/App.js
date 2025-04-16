// ⊗jsrtPmFmsChI

import React, { useState } from 'react';

//2
function App() {

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <>
      <p>Прошу тебя пользователь, выбери с помощью чекбоксов, языки, которые ты знаешь.</p>
      <label>
        html
        <input type='checkbox' checked={checked1} onChange={() => setChecked1(!checked1)} />
      </label>
      <label>
        css
        <input type='checkbox' checked={checked2} onChange={() => setChecked2(!checked2)} />
      </label>
      <label>
        js
        <input type='checkbox' checked={checked3} onChange={() => setChecked3(!checked3)} />
      </label>
      <p>{checked1 && 'Пользователь знает HTML'}</p>
      <p>{checked2 && 'Пользователь знает CSS'}</p>
      <p>{checked3 && 'Пользователь знает JS'}</p>
    </>
  )

}

export default App;