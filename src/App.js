// ⊗jsrtPmCpPS

//1
import React from 'react';
import { Users } from './components/Users';

const App = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <Users />
            </tbody>
        </table>
    )

};

export default App;