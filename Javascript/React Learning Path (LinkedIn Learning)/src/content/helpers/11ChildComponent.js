import React, {useContext} from 'react';
import {NameContext} from '../11TheUseContextHook';

function ChildComponent() {  
  const name = useContext(NameContext);  

  return <div>
      <h3>{name} from parent context</h3>
  </div>;
}

export default ChildComponent;

