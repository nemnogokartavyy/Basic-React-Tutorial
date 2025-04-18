import React, { useState } from "react";
import { User } from "./User";

const Users = () => {

    const initUsers = [
        { id: 1, name: 'user1', surname: 'surn1', age: 30, ban: false },
        { id: 2, name: 'user2', surname: 'surn2', age: 31, ban: false },
        { id: 3, name: 'user3', surname: 'surn3', age: 32, ban: false },
    ];

    const [users, setUser] = useState(initUsers);

    const result = users.map(user => {
        return <User
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            ban={user.ban}
            banIt={banIt}
            isEdit={user.isEdit}
            changeField={changeField}
        />
    })

    function banIt(id) {
        let copy = users.map(user => {
            if (user.id === id) {
                return { ...user, ban: !user.ban };
            } else {
                return user;
            }
        })
        setUser(copy);
    }

    function changeField(id, field, event) {
        if (field !== 'id') {
            setUser(users.map(user => {
                if (user.id === id) {
                    user[field] = event.target.value;
                }
                return user;
            }));
        }
    };

    return (
        <>
            {result}
        </>
    )

}

export { Users };