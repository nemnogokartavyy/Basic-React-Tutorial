import React, { useState } from "react";

const UserField = ({ name, id, type, changeField }) => {

    const [isEdit, setIsEdit] = useState(false);

    return (
        <td>
            {
                isEdit
                    ? <input
                        value={name}
                        onChange={event => { changeField(id, type, event) }}
                        onBlur={() => setIsEdit(false)} />
                    : <span onClick={() => setIsEdit(true)}>{name}</span>
            }
        </td>
    )

}

export { UserField };