import React from 'react';

//4 - importação de componente
import FirstComponent from './components/FirstComponent';


function App() {

  //1 - variaveis
  const name: string = "lucas";
  const age: number = 20;
  const isWorking: boolean = true;

  //2 - funções 
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Age: {age}</h2>
      {isWorking && <p>trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
