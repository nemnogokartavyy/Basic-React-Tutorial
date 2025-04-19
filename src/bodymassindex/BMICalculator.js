import React, { useState } from "react";
import BMIHeightInput from "./BMIHeightInput";
import BMIMassInput from "./BMIMassInput";
import BMIVerdict from "./BMIVerdict";

function BMICalculator() {

    const [mass, setMass] = useState();
    const [height, setHeight] = useState();
    const [resultBMI, setResultBMI] = useState();

    function calcBMI(mass, height) {
        setResultBMI(mass / ((height * 0.01) ** 2));
    }

    return (
        <div>
            <BMIHeightInput height={height} setHeight={setHeight} /><br />
            <BMIMassInput mass={mass} setMass={setMass} /><br />
            <button onClick={() => calcBMI(mass, height)}>Click</button><br />
            <BMIVerdict resultBMI={resultBMI} />
        </div>
    )

}

export default BMICalculator;