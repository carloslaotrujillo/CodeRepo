import React, {useState} from 'react';
import ChildComponent from './helpers/16ChildComponent';

function PassingDataFromChildrenToParent() {

  const [childData, setChildData] = useState("");

  const childToParent = (data) => {
    setChildData(data);
  }

  return <div>
      <ChildComponent toParent={childToParent} />      
      <h3>{childData}</h3>
  </div>;
}

export default PassingDataFromChildrenToParent;
