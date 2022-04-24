import * as React from 'react';

interface IDestructuringProps {
    title: string;
    content: string;
    commentQty: number,
    tags: string[],

    //8 - enum
    category: Category
}

export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "PYTHON"
}

export default function Destructuring ({ title, content, commentQty,tags, category }: IDestructuringProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentQty}</p>
      <div>
          {
              tags.map(tag => (
                  <span>#{tag}</span>
              ))
          }
      </div>
    </div>
  );
}
