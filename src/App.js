// ⊗jsrtPmDtOAOp

import React, { useState } from 'react';
import { nanoid } from 'nanoid';

//1
//2
//3
const App = () => {

    const initNotes = [
        {
            id: '111GYi9G_uC4gBF1e2SixDvu',
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: '222IWSpfBPSV3SXgRF87uO74',
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: '333JAmjRlfQT8rLTm5tG2m1L',
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ];

    const [notes, setNotes] = useState(initNotes);

    const [valueProp1, setValueProp1] = useState();
    const [valueProp2, setValueProp2] = useState();
    const [valueProp3, setValueProp3] = useState();

    const [idEdit, setIdEdit] = useState();

    const result = notes.map(note => {
        return <li key={note.id}>
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>

            <button onClick={() => deleteElem(note.id)}>
                Delete
            </button>

            <button onClick={() => addInInput(note.id)}>
                AddInInput
            </button>
        </li>;
    });

    function deleteElem(id) {
        let arr = [];
        notes.map(elem => {
            if (elem.id !== id) {
                arr.push(elem);
            }
        })
        setNotes(arr);
    }

    function addInInput(id) {
        setIdEdit(id);
        notes.map(elem => {
            if (elem.id === id) {
                setValueProp1(elem.prop1);
                setValueProp2(elem.prop2);
                setValueProp3(elem.prop3);
            }
        })
    }

    function addInLi(id) {
        let arrCopy = notes.map((elem) => {
            if (elem.id === id) {
                return {
                    ...elem,
                    prop1: valueProp1,
                    prop2: valueProp2,
                    prop3: valueProp3,
                };
            } else {
                return elem;
            }
        })
        setNotes(arrCopy);
    }

    return <div>
        <ul>
            {result}
        </ul>
        <input value={valueProp1} onChange={(event) => setValueProp1(event.target.value)} />
        <input value={valueProp2} onChange={(event) => setValueProp2(event.target.value)} />
        <input value={valueProp3} onChange={(event) => setValueProp3(event.target.value)} />
        <button onClick={() => addInLi(idEdit)}>AddInLi</button>
    </div>;

};

export default App;