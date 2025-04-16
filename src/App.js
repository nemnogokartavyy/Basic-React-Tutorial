// ⊗jsrtPmFmsSI

import React, { useState } from 'react';

//1
function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return <div>
    <select value={value} onChange={handleChange}>
      <option>Минск</option>
      <option>Могилев</option>
      <option>Брест</option>
      <option>Гомель</option>
      <option>Витебск</option>
      <option>Гродно</option>
    </select>
    <p>
      {value}
    </p>
  </div>;
}

export default App;