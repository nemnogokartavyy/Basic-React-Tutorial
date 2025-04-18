// ⊗jsrtPmCpChL

//1
import React, { useState } from 'react';
import { User } from './components/User';

const App = () => {

    const users = [
        { id: 1, name: 'user1', surn: 'surn1', age: 30 },
        { id: 2, name: 'user2', surn: 'surn2', age: 31 },
        { id: 3, name: 'user3', surn: 'surn3', age: 32 },
    ];

    let result = users.map(user => {
        return <User key={user.id} name={user.name} surname={user.surn} age={user.age} />
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    )

};

export default App;