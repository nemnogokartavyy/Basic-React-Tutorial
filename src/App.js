// ⊗jsrtPmDtSh

//1
import React, { useState } from 'react';

const App = () => {

    const initNotes = [
        {
            id: 1,
            name: 'name1',
            desc: 'long description 1',
            show: false,
        },
        {
            id: 2,
            name: 'name2',
            desc: 'long description 2',
            show: false,
        },
        {
            id: 3,
            name: 'name3',
            desc: 'long description 3',
            show: false,
        },
    ];

    const [notes, setNotes] = useState(initNotes);

    const result = notes.map(note => {
        return <>
            {note.show
                ? <p key={note.id}>
                    {note.name},
                    <i>{note.desc}</i>
                </p>
                : <p key={note.id}>
                    {note.name},
                </p>
            }
            <button onClick={() => showElem(note.id)}>Show Descr</button>
        </>
    });

    function showElem(id) {
        let copy = Object.assign(notes);
        copy = notes.map(elem => {
            if (elem.id === id) {
                return { ...elem, show: !elem.show }
            }
            return elem;
        })
        setNotes(copy);
    }

    return <div>
        {result}
    </div>;

};

export default App;