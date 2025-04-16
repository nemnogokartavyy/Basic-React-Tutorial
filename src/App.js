import uuid from 'react-uuid';
import { nanoid } from 'nanoid'
import React, { useState } from 'react';

// ⊗jsrtPmStRt
//1
function App() {

  const [name, setName] = useState('Петя');
  const [surname, setSurname] = useState('Иванов');

  return <div>
    <p>Имя: {name}</p>
    <p>Фамилия: {surname}</p>
    <button onClick={() => setName('Егор')}>change name</button>
    <button onClick={() => setSurname('Петров')}>change seurname</button>
  </div>

}

export default App;