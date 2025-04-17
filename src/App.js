// ⊗jsrtPmDtAA

import React, { useState } from 'react';

//1
//2
const App = () => {

    let arr = [1, 2, 3, 4, 5];

    const [array, setArray] = useState(arr);
    const [input, setInput] = useState();

    let result = array.map((elem, index) => {
        return <li key={index}>{elem}</li>
    });

    function func() {
        let copy = [...array];
        copy.push(+input);
        setArray(copy);
        setInput('');
    };

    return (
        <>
            <ul>
                {result}
            </ul>
            <input value={input} onChange={event => setInput(event.target.value)} />
            <button onClick={() => func()}>Click</button>
        </>
    )
    
};

export default App;