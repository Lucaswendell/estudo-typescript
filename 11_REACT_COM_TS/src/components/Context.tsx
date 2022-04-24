import React, {useContext} from 'react';
import { AppContext } from '../App';

const Context: React.FunctionComponent = (props) => {
    const details = useContext(AppContext);
    
  return (
      <>
        {details && (<div>
            <h2>Linguagem: {details.language}</h2>
            <h2>Framework: {details.framework}</h2>
            <h2>Projeto: {details.project}</h2>
        </div>)}
      </>
  );
};

export default Context;
