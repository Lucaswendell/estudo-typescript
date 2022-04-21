import React from 'react';

function App() {

  //1 - variaveis
  const name: string = "lucas";
  const age: number = 20;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Age: {age}</h2>
      {isWorking && <p>trabalhando!</p>}
    </div>
  );
}

export default App;
