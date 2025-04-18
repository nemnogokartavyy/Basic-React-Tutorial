import React from "react";

const User = ({ id, name, surname, age, ban, banIt, isEdit, toggleMode, editUser }) => {
    return (
        <>
            <tr>
                <td>{isEdit
                    ? <input value={name} onChange={(event) => editUser(id, 'name', event)} />
                    : <span>{name}</span>}</td>
                <td>{isEdit
                    ? <input value={surname} onChange={(event) => editUser(id, 'surname', event)} />
                    : <span>{surname}</span>}</td>
                <td>{isEdit
                    ? <input value={age} onChange={(event) => editUser(id, 'age', event)} />
                    : <span>{age}</span>}</td>
                <td>{id}</td>
                <td>{ban ? 'Забанен' : 'Активен'}</td>
                <td>
                    <button onClick={() => banIt(id)}>{ban ? 'Разбанить' : 'Забанить'}</button>
                </td>
                <td>
                    <button onClick={() => toggleMode(id)}>{isEdit ? 'Сохранить' : 'Редактировать'}</button>
                </td>
            </tr>
        </>
    )
}

export { User };