import React from "react";

function BMIVerdict({ resultBMI }) {

    let result;

    if (resultBMI < 16) {
        result = 'Острый дифицит массы';
    } else if (resultBMI >= 16 && resultBMI <= 18.5) {
        result = 'Недостаточная масса тела';
    } else if (resultBMI >= 18.6 && resultBMI <= 25) {
        result = 'Норма';
    } else if (resultBMI >= 25.1 && resultBMI <= 30) {
        result = 'Избыточная масса тела';
    } else if (resultBMI >= 30.1 && resultBMI <= 35) {
        result = 'Ожирение первой степени';
    } else if (resultBMI >= 35.1 && resultBMI <= 40) {
        result = 'Ожирение второй степени';
    } else {
        result = 'Ожирение третьей степени';
    }

    return (
        <>
            <span>
                {result}
            </span>
            <span>
                {resultBMI}
            </span>
        </>
    )

}

export default BMIVerdict;