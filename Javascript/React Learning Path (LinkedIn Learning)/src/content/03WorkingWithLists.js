import React from 'react';

const data = [
    "LOL",
    "LMAO",
    "WTF",
    "WBU",
    "EOD",
    "KIA",
    "MIA",
    "AMA"
]

const dataObjects = data.map((item, i) => ({id: i, name: item}));

function WorkingWithLists() {
  return <div>
      <ul style={{textAlign: "left"}}>
          {dataObjects.map((item) => 
          <li key={item.id}>
              {item.name}
          </li>)}
      </ul>
  </div>;
}

export default WorkingWithLists;
