// ⊗jsrtPmFmsChCR

import React, { useState } from 'react';

//1
function App() {
  const [checked, setChecked] = useState(true);

  let text;
  if (checked) {
    text = <div>
      <h2>Ура, вам уже есть 18</h2>
      <p>
        здесь расположен контент только для взрослых
      </p>
    </div>;
  } else {
    text = <div>
      <p>
        увы, вам еще нет 18 лет:(
      </p>
    </div>;
  }

  return <div>
    <input type="checkbox" checked={checked}
      onChange={() => setChecked(!checked)} />
    {text}
  </div>;
}

export default App;