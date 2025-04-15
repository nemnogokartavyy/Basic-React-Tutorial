import React from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid'

// ⊗jsrtPmIdGn
//1
function App() {

  let arr = [1, 2, 3, 4, 5];

  let res1 = arr.map(elem => {
    return <li key={uuid()} id={uuid()}>{elem}</li>
  });

  let res2 = arr.map(elem => {
    return <li key={nanoid()} id={nanoid()}>{elem}</li>
  });

  // ⊗jsrtPmIdFn
  //1
  function nanoId() {
    return nanoid();
  }

  // ⊗jsrtPmIdFn
  //2
  function uuidId() {
    return uuid();
  }

  return (
    <>
      <ul>{res1}</ul>
      <ul>{res2}</ul>
    </>
  )

}

export default App;