// ⊗jsrtPmFcEOP

import React from 'react';

function App() {

  //1
  function func1(arg1, arg2, event) {
    console.log(arg1, arg2, event);
  }

  //2
  function func2(event, arg1, arg2) {
    console.log(event, arg1, arg2);
  }

  //3
  function func3(arg1, event, arg2) {
    console.log(arg1, event, arg2);
  }

  return <div>
    <button onClick={event => func1('eee', 'aaa', event)}>act</button>
    <button onClick={event => func2(event, 'eee', 'aaa')}>act</button>
    <button onClick={event => func3('eee', event, 'aaa')}>act</button>
  </div>;

}

export default App;