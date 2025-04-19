import React from "react";

function BMIHeightInput({ height, setHeight }) {

    return (
        <label>
            Введите в поле свой рост в сантиметрах: <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </label>
    )

}

export default BMIHeightInput;