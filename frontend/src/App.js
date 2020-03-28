import './global.css';
import React from 'react';
// import React, { useState } from 'react';
// import Header from './Header'; não será mais utilizado, devido a entrada de Logon
//import Logon from './pages/Logon'; //procura o arquivo index automaticamente

import Logon from './routes';

function App() {
  // const [counter, setCounter] = useState(0);
  // //retorno array [valor, funcaoAtualizacao]

  // function increment() {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }

  return (
    // <div>
    // {/* // <Header title = "Semana OmniStack"/>
    // //ou
    // //do modo abaixo, que gera a propriedade children para ser atribuída no código HTML */}
    // <Header>
    //   {/* Semana OmniStack */}
    //   Contador: {counter}
    // </Header>
    // <button onClick={increment}>Incrementar</button>
    // </div>

    <Logon/>
  );
}

export default App;
