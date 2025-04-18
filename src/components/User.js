import React from "react";

const User = ({ name, surname, age }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
        </tr>
    )
}

export { User };