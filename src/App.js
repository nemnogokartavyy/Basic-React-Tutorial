// ⊗jsrtPmJxTCr

import React from 'react';

function App() {

  {/* #1 */ }
  const list = (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );

  {/* #2 */ }
  const table = (
    <table>
      <thead>
        <tr>
          <th>Ячейка шапки 1</th>
          <th>Ячейка шапки 2</th>
          <th>Ячейка шапки 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-1</td>
          <td>1-2</td>
          <td>1-3</td>
        </tr>
        <tr>
          <td>2-1</td>
          <td>2-2</td>
          <td>2-3</td>
        </tr>
        <tr>
          <td>3-1</td>
          <td>3-2</td>
          <td>3-3</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Ячейка подвала 1</td>
          <td>Ячейка подвала 2</td>
          <td>Ячейка подвала 3</td>
        </tr>
      </tfoot>
    </table>
  )

  return (
    <>
      {list}
      {table}
    </>
  );

}

export default App;