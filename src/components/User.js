import React from "react";
import { UserField } from "./UserField";

const User = ({ id, name, surname, age, ban, banIt, isEdit, toggleMode, editUser }) => {
    return (
        <>
            <tr>

                <UserField
                    name={name}
                    id={id}
                    type='name'
                    editUser={editUser}
                    isEdit={isEdit}
                />
                <UserField
                    name={surname}
                    id={id}
                    type='surname'
                    editUser={editUser}
                    isEdit={isEdit}
                />
                <UserField
                    name={age}
                    id={id}
                    type='age'
                    editUser={editUser}
                    isEdit={isEdit}
                />
                <UserField
                    name={id}
                    id={id}
                />

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