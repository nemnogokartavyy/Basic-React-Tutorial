import React from "react";

function TempInp({ temp, setTemp }) {

    return (
        <>
            <input value={temp} onChange={(event) => setTemp(event.target.value)} />
        </>
    )

}

export default TempInp;