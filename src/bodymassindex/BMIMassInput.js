import React from "react";

function BMIMassInput({ mass, setMass }) {

    return (
        <label>
            Введите в поле свой вес в килограммах: <input value={mass} onChange={(event) => setMass(event.target.value)} />
        </label>
    )

}

export default BMIMassInput;