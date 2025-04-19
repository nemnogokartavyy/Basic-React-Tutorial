import React from "react";

function Verdict({ temp }) {

    let verdict;
    if (temp <= 0) {
        verdict = 'Вода замерзла';
    } else if (temp > 0 && temp < 100) {
        verdict = 'Вода жидкая';
    } else {
        verdict = 'Вода испарилась';
    }

    return (
        <>
            <p>{verdict}</p>
        </>
    )

}

export default Verdict;