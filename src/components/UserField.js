import React from "react";

const UserField = ({ name, id, type, editUser, isEdit }) => {
    return <td>
        {isEdit
            ? <input value={name} onChange={(event) => editUser(id, type, event)} />
            : <span>{name}</span>}
    </td>
}

export { UserField };