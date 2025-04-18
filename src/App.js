// ⊗jsrtPmCpCh

//1
import React, { useState } from 'react';
import { Employee } from './components/Employee';

const App = () => {

    const surname1 = 'Иванов';
    const name1 = 'Иван';
    const salary1 = 1000;

    const surname2 = 'Сидоров';
    const name2 = 'Евлампий';
    const salary2 = 1100;

    const surname3 = 'Синицын';
    const name3 = 'Максим';
    const salary3 = 1200;

    return (
        <>
            <Employee surname={'Петров'} name={'Петр'} salary={1000} />
            <Employee surname={surname1} name={name1} salary={salary1} />
            <Employee surname={surname2} name={name2} salary={salary2} />
            <Employee surname={surname3} name={name3} salary={salary3} />
        </>
    )

};

export default App;