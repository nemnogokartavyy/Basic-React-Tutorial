// ⊗jsrtPmFcTC

import React from 'react';

{/* #1 */ }
function App() {

  function getDigitsSum(num) {
    return String(num).split('').reduce((sum, elem) => sum += +elem, 0);
  }

  return (
    <p>{getDigitsSum(12345)}</p>
  )

}

export default App;