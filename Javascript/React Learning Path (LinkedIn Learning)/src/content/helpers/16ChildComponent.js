import React, {useEffect} from 'react';

function ChildComponent(props) {    

  const data1 = "This is FIRST data from Child Component to the Parent Component."
  const data2 = "This is SECOND data from Child Component to the Parent Component."

  useEffect(() => {
    props.toParent(data1);
  }, []);

  return <div>
      <button onClick={() => props.toParent(data2)}>Click to get Data2 from Child</button>
      <button onClick={() => props.toParent(data1)}>Click to get Data1 from Child</button>
  </div>;
}

export default ChildComponent;

