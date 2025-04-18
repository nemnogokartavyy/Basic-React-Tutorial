import React from "react";
import { UserField } from "./UserField";

const User = ({ id, name, surname, age, ban, banIt, changeField }) => {
    return (
        <>
            <tr>

                <UserField
                    name={name}
                    id={id}
                    type='name'
                    changeField={changeField}
                />
                <UserField
                    name={surname}
                    id={id}
                    type='surname'
                    changeField={changeField}
                />
                <UserField
                    name={age}
                    id={id}
                    type='age'
                    changeField={changeField}
                />
                <UserField
                    name={id}
                    id={id}
                    changeField={changeField}
                />

                <td>{ban ? 'Забанен' : 'Активен'}</td>

                <td>
                    <button onClick={() => banIt(id)}>{ban ? 'Разбанить' : 'Забанить'}</button>
                </td>

            </tr>
        </>
    )
}

export { User };