import uuid from 'react-uuid';
import { nanoid } from 'nanoid'
import React, { useState } from 'react';

// ⊗jsrtPmStUs
//1
function App() {

  const [name, setName] = useState('Петя');
  const [surname, setSurname] = useState('Иванов');
  const [age, setAge] = useState('30');

  return <div>
    <p>Имя: {name}</p>
    <p>Фамилия: {surname}</p>
    <p>Возраст: {age}</p>
  </div>

}

export default App;