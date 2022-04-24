import * as React from 'react';

interface IDestructuringProps {
    title: string;
    content: string;
    commentQty: number,
    tags: string[]
}

export default function Destructuring ({ title, content, commentQty,tags }: IDestructuringProps) {
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
