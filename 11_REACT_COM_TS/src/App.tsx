import React from 'react';

//4 - importação de componente
import FirstComponent from './components/FirstComponent';

//5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructing';

//6 - hook useState
import State from './components/State';

//9 - types
type textOrNull = string | null;

function App() {

  //1 - variaveis
  const name: string = "lucas";
  const age: number = 20;
  const isWorking: boolean = true;

  //2 - funções 
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }


  //9 - type
  const myText: textOrNull = "Tem texto";
  let mySecondText = null;
  // mySecondText = "Tem texto";

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Age: {age}</h2>
      {isWorking && <p>trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo"/>
      <Destructuring 
        title="Primeiro post" 
        content='algum conteudo' 
        commentQty={3} 
        tags={["js", "ts"]} 
        category={Category.TS}
        />
      <Destructuring 
        title="Segundo post" 
        content='algum conteudo' 
        commentQty={3} 
        tags={["ts"]}
        category={Category.P}
        />

      <State />


      {myText && <p>Tem texto aqui</p>}
      {mySecondText && <p>Tem texto aqui</p>}
    </div>
  );
}

export default App;
