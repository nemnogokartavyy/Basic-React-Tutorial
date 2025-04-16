// ⊗jsrtPmFmsChCR

import React, { useState } from 'react';

//2
function App() {
  const [checked, setChecked] = useState(true);

  let text;
  if (checked) {
    text = <p>text</p>
  } else {
    text = '';
  }

  return <div>
    <input type="checkbox" checked={checked}
      onChange={() => setChecked(!checked)} />
    {text}
  </div>;
}

export default App;