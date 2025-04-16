// ⊗jsrtPmFmsSV

import { nanoid } from 'nanoid';
import React, { useState } from 'react';

//1
function App() {
  const [value, setValue] = useState('1');

  return <div>
    <select value={value} onChange={(event) => setValue(event.target.value)}>
      <option value="1">0-12 лет</option>
      <option value="2">13-17 лет</option>
      <option value="3">18-25 лет</option>
      <option value="4">25+ лет</option>

    </select>
    <p>
      {value === '1' && '0-12 лет'}
      {value === '2' && '13-17 лет'}
      {value === '3' && '18-25 лет'}
      {value === '4' && '25+ лет'}
    </p>
  </div>;
}

export default App;