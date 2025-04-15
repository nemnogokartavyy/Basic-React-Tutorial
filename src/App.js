// ⊗jsrtPmFcEO

import React from 'react';

function App() {

  //1
  function func1(event) {
    console.log(event);
  }

  //2
  function func2(event) {
    console.log(event.target);
  }

  return <div>
    <button onClick={func1}>act1</button>
    <button onClick={func2}>act2</button>
  </div>;

}

export default App;