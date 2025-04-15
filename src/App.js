// ⊗jsrtPmCdSh

import React from 'react';

{/* #1 */ }
function App() {
  let isAdult;
  let text;
  let age = 20;

  if (age >= 18) {
    isAdult = true;
  } else {
    isAdult = false;
  }

  isAdult ? text = <p>Есть 18 лет</p> : text = <p>Нет 18 лет</p>;

  return text;
}

export default App;