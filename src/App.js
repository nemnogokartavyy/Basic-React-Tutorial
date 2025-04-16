// ⊗jsrtPmFmsIF

import React, { useState } from 'react';

//2
function App() {
  const [ageUser, setAgeUser] = useState(0);

  let dateNow = new Date();

  function getYearBirth(event) {
    setAgeUser(event.target.value);
  }

  return (
    <>
      <input value={ageUser} type='number' onChange={getYearBirth} />

      <p>
        Год рождения: {dateNow.getFullYear() - +ageUser}
      </p>
    </>
  )

}

export default App;