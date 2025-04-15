// ⊗jsrtPmFcHP

import React from 'react';

{/* #1 */ }
function App() {
  function showMess(name) {
    alert(name);
  }
  return <div>
    <button onClick={() => showMess(1)}>act1</button>
    <button onClick={() => showMess(2)}>act2</button>
    <button onClick={() => showMess(3)}>act3</button>
  </div>;
}

export default App;