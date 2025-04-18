import React from "react";

const User = ({ id, name, surname, age, ban, banIt }) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
                <td>{id}</td>
                <td>{ban ? 'Забанен' : 'Активен'}</td>
                <td>
                    <button onClick={() => banIt(id)}>{ban ? 'Разбанить' : 'Забанить'}</button>
                </td>
            </tr>
        </>
    )
}

export { User };