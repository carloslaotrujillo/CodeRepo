import React, {createContext} from 'react';

// The React context provides data to components no matter how deep they are in the components tree. 
// The context is used to manage global data, e.g. global state, theme, services, user settings, and more.

import ChildComponent from './helpers/11ChildComponent'

export const NameContext = createContext();

function TheUseContextHook() {
  return <div>
      <NameContext.Provider value={"Carlos"}>
          <ChildComponent />
      </NameContext.Provider>
  </div>;
}

export default TheUseContextHook;
