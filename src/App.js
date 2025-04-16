// ⊗jsrtPmStIC

import React, { useState } from 'react';

//1
function App() {

  const [age, setAge] = useState(30);

  return <div>
    <button onClick={() => setAge(age + 1)}>+</button>
    <button onClick={() => setAge(age - 1)}>-</button>
    <p>Возроаст - {age} лет.</p>
  </div>

}

export default App;