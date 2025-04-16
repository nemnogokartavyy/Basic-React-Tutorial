// ⊗jsrtPmFmsTx

import React, { useState } from 'react';

//1
function App() {

  const [value, setValue] = useState('');
  const [res, setRes] = useState();

  function translit(text) {
    let answer = '';
    let converter = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',
      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    for (let i = 0; i < text.length; i++) {
      if (converter[text[i]] == undefined) {
        answer += text[i];
      } else {
        answer += converter[text[i]];
      }
    }
    return answer;
  }

  return (
    <>
      <textarea value={value} onChange={(event) => { setRes(translit(event.target.value)); setValue(event.target.value); }} />

      <p>
        {res}
      </p>
    </>
  )

}

export default App;