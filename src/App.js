// ⊗jsrtPmFmsOIB

import React, { useState } from 'react';

//1
//2
const App = () => {

    const initDate = {
        year: 2025,
        month: 12,
        day: 31,
    }

    const [date, setDate] = useState(initDate);

    function handleChange(event, name) {
        const nValue = Number(event.target.value);

        const copy = Object.assign({}, date);
        copy[name] = nValue;
        setDate(copy);
    };

    const isValidDate =
        date.year > 0 &&
        date.month >= 1 &&
        date.month <= 12 &&
        date.day >= 1 &&
        date.day <= 31;

    let dayOfWeek = '';

    if (isValidDate) {

        const resultDate = new Date(date.year, date.month - 1, date.day);

        if (resultDate.getFullYear() === date.year
            && resultDate.getMonth() === date.month - 1
            && resultDate.getDate() === date.day) {

            const arr = [
                'вс',
                'пн',
                'вт',
                'ср',
                'чт',
                'пт',
                'сб',
            ];

            dayOfWeek = arr[resultDate.getDay()];

        } else {
            dayOfWeek = 'Дата некорректная';
        }
        
    } else {
        dayOfWeek = 'Дата некорректная';
    }

    return (
        <div>

            <input
                name="yea
                type='number'r"
                value={date.year}
                onChange={(event) => handleChange(event, 'year')}
                min="1"
            />

            <input
                type='number'
                name="month"
                value={date.month}
                onChange={(event) => handleChange(event, 'month')}
                min="1"
                max="12"
            />

            <input
                type='number'
                name="day"
                value={date.day}
                onChange={(event) => handleChange(event, 'day')}
                min="1"
                max="31"
            />


            <p>
                {date.year}-{date.month}-{date.day}-{dayOfWeek}
            </p>

        </div>
    );

};

export default App;