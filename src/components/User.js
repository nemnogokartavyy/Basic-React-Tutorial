import React from "react";

const User = ({ name, surname, age, id }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
            <td>{id}</td>
        </tr>
    )
}

export { User };