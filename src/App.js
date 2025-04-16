// ⊗jsrtPmStBV

import React, { useState } from 'react';

//1
//2
function App() {

  const [ban, setBan] = useState(false);

  return <div>
    <p>Пользователь: {ban ? 'забанен' : 'не забанен'}</p>
    {!ban
      ? <button onClick={() => setBan(true)}>забанить</button>
      : <button onClick={() => setBan(false)}>разбанить</button>
    }
  </div>

}

export default App;