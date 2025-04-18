import React from "react";

const Employee = ({ surname, name, salary }) => {
    return (
        <div>
            <p>surname: {surname} </p>
            <p>name: {name} </p>
            <p>salary: {salary} </p>
        </div>
    )
}

export { Employee };