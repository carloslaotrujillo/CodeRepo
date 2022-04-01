import './App.css';
import Comp01 from "./content/01CreatingComponents";
import Comp02 from "./content/02AddingComponentProperties";
import Comp03 from "./content/03WorkingWithLists";
import Comp04 from "./content/04DisplayingImages";
import Comp05 from "./content/05UsingFragments";
import Comp06 from "./content/06ConditionalRendering";
import Comp07 from "./content/07DestructuringArraysAndObjects";
import Comp08 from "./content/08TheUseStateHook";
import Comp09 from "./content/09TheUseEffectHook";
import Comp10 from "./content/10TheUseReducerHook";
import Comp11 from "./content/11TheUseContextHook";
import Comp12 from "./content/12FetchingDataWithHooks";
import Comp15 from "./content/15ReactRouter";
import Comp16 from "./content/16PassingDataFromChildrenToParent";
import Comp17 from "./content/17TheUseRefHook";
import Comp18 from "./content/18CreatingCustomHook";

import Main from './content/example_components/Main';

function App() {
  return (
    <div className="App">      
      <h1>01 CreatingComponents</h1>
      <Comp01 />

      <h1>02 AddingComponentProperties</h1>
      <Comp02 desireLabel="Helloww" />

      <h1>03 WorkingWithLists</h1>
      <Comp03 />

      <h1>04 DisplayingImages</h1>
      <Comp04 />

      <h1>05 UsingFragments</h1>
      <Comp05 />

      <h1>06 ConditionalRendering</h1>
      <Comp06 auth={true} /> 
      {/* Change the value to false to render the other component */}

      <h1>07 DestructuringArraysAndObjects</h1>
      <Comp07 props1={{ pi: 3.14, type: "irrational" }} props2="Prop2" />

      <h1>08 useStateHook</h1>
      <Comp08 />

      <h1>09 useEffectHook</h1>
      <Comp09 />

      <h1>10 useReducerHook</h1>
      <Comp10 />

      <h1>11 useContextHook</h1>
      <Comp11 />

      <h1>12 FetchingDataWithHooks</h1>
      <Comp12 />

      <h1>15 ReactRouter</h1>
      <Comp15 />

      <h1>16 PassingDataFromChildrenToParent</h1>
      <Comp16 />

      <h1>17 TheUseRefHook</h1>
      <Comp17 />

      <h1>18 CreatingCustomHook</h1>
      <Comp18 />

      <h1>Example Components</h1>
      <Main />
    </div>
  );
}

export default App;
