import * as React from 'react';

export interface Props {
    name: string;
}

export default function SecondComponent (props: Props) {

  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é: {props.name}</p>
    </div>
  );
}
