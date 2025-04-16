// ⊗jsrtPmFmsSA

import { nanoid } from 'nanoid';
import React, { useState } from 'react';

//1
function App() {
  let cities = ['Минск', 'Могилев', 'Брест', 'Гомель', 'Витебск', 'Гродно']
  const [value, setValue] = useState(cities[0]);

  const options = cities.map(city => {
    let key = nanoid();
    return <option key={key}>{city}</option>;
  })

  return <div>
    <select value={value} onChange={(event) => setValue(event.target.value)}>
      {options}
    </select>
    <p>
      {value}
    </p>
  </div>;
}

export default App;