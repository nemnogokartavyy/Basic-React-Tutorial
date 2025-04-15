import React from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid'

// ⊗jsrtPmIdFU
//1
function App() {

  function id() {
    return nanoid();
  }

  const prods = [
    { id: id(), name: 'product1', cost: 100 },
    { id: id(), name: 'product2', cost: 200 },
    { id: id(), name: 'product3', cost: 300 },
  ];

}

export default App;