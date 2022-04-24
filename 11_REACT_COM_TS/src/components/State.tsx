import React, {ChangeEvent, useState} from 'react';

interface IStateProps {
}

export default function State (props: IStateProps) {

  const [text, setText] = useState<string | null>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <p>{text}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}
