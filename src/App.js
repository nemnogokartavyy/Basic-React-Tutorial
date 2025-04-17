// ⊗jsrtPmDtAOp

import React, { useState } from 'react';
import { nanoid } from 'nanoid';

//1
//2
//3
//4
//5
const App = () => {

    let arr = [1, 2, 3, 4, 5];

    const [array, setArray] = useState(arr);
    const [input, setInput] = useState();
    const [editIndex, setEditIndex] = useState();

    let result = array.map((elem, index) => {

        return <>

            <li key={id()} onClick={() => {
                sq(index);
                takeInInput(elem, index);
            }}>{elem}</li>

            <button key={id()} onClick={() => del(index)}> Click</button >

        </>

    })

    function id() {
        let id = nanoid();
        return id;
    }

    function sq(index) {
        let copy = [...array];
        copy[index] = copy[index] ** 2;
        setArray(copy);
    }

    function del(index) {
        let copy = [...array.slice(0, index), ...array.slice(index + 1)];
        setArray(copy);
        if (index === editIndex) {
            setEditIndex(null);
            setInput('');
        }
    }

    function takeInInput(elem, index) {
        setEditIndex(index);
        setInput(elem);
    }

    function takeInLi(value) {
        let copy = [...array];
        copy[editIndex] = value;
        setArray(copy);
    }

    function reverseArr() {
        let copy = [...array].reverse();
        setArray(copy);
    }

    return (
        <div>
            <ul>
                {result}
            </ul>
            <input value={input}
                onChange={(event) => setInput(event.target.value)}
                onBlur={(event) => takeInLi(event.target.value)} />
            <div>
                <button onClick={() => reverseArr()}>Reverse</button>
            </div>
        </div>
    )

};

export default App;