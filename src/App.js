import React from 'react';

function App() {

  // ⊗jsrtPmFmLI
  //1
  function func1() {
    const arr = [
      <li>1</li>,
      <li>2</li>,
      <li>3</li>,
      <li>4</li>,
      <li>5</li>,
    ];
    return <ul>
      {arr}
    </ul>
  }

  // ⊗jsrtPmFmLTA
  //1
  function func2() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<li>{i + 1}</li>)
    }
    return <ul>
      {arr}
    </ul>
  }

  // ⊗jsrtPmFmTAD
  //1
  function func3() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    let result = arr.map(elem => {
      return <li>{elem}</li>
    })
    return <ul>
      {result}
    </ul>
  }

  // ⊗jsrtPmFmLP
  //1
  function func4() {
    const array = ['a', 'b', 'c', 'd', 'e'];
    let result = array.map((elem, index) => {
      return <li key={index}>{elem}</li>
    })
    return <ul>
      {result}
    </ul>
  }

  // ⊗jsrtPmFmAOO
  //1
  function func5() {
    const users = [
      { name: 'user1', surn: 'surn1', age: 30 },
      { name: 'user2', surn: 'surn2', age: 31 },
      { name: 'user3', surn: 'surn3', age: 32 },
    ];
    let result = users.map((elem, index) => {
      return <li key={index}>
        <span>{elem.name}</span>
        <span>{elem.surn}</span>
        <span>{elem.age}</span>
      </li>
    });
    return <ul>
      {result}
    </ul>
  }

  // ⊗jsrtPmFmUKI
  //1
  function func5() {
    const users = [
      { id: 1, name: 'user1', surn: 'surn1', age: 30 },
      { id: 2, name: 'user2', surn: 'surn2', age: 31 },
      { id: 3, name: 'user3', surn: 'surn3', age: 32 },
    ];
    let result = users.map((elem) => {
      return <li key={elem.id}>
        <span>{elem.name} </span>
        <span>{elem.surn} </span>
        <span>{elem.age} </span>
      </li>
    });
    return <ul>
      {result}
    </ul>
  }

  // ⊗jsrtPmFmTA
  //1
  function func6() {
    const users = [
      { id: 1, name: 'user1', surn: 'surn1', age: 30 },
      { id: 2, name: 'user2', surn: 'surn2', age: 31 },
      { id: 3, name: 'user3', surn: 'surn3', age: 32 },
    ];
    let result = users.map(user => {
      return <tr>
        <td>{user.name}</td>
        <td>{user.surn}</td>
        <td>{user.age}</td>
      </tr>
    });
    return <table>
      <thead>
        <tr>
          <th>имя</th>
          <th>фамилия</th>
          <th>возраст</th>
        </tr>
      </thead>
      <tbody>
        {result}
      </tbody>
    </table>
  }

  return (
    <>
      {func1()}
      {func2()}
      {func3()}
      {func4()}
      {func5()}
      {func6()}
    </>
  )

}

export default App;