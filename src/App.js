// ⊗jsrtPmCoTOS

//1
import React, { useState } from 'react';

const App = () => {

    const [temp, setTemp] = useState(0);

    return (
        <div>
            <label>
                Температура по цельсию: <input type='number'
                    value={temp} onChange={(event) => setTemp(event.target.value)} />
            </label>
            <label>
                Температура по фарегейту: <input type='number'
                    value={((temp * 9 / 5) + 32)} onChange={(event) => setTemp((event.target.value - 32) * 5 / 9)} />
            </label>
        </div>
    )

};

export default App;