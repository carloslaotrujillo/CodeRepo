const user1 = {
  first: "John",
  last: "Doe",
  country: "USA",
};

const user2 = {
  first: "John",
  last: "Doe",
  country: "USA",
};

console.log(user1 === user2); // No good. These comparisons don't work with non primitives

// If keys are in the same order
const stringUser1 = JSON.stringify(user1);
const stringUser2 = JSON.stringify(user2);
console.log(stringUser1 === stringUser2);

function isSameObject(obj1, obj2) {
  const prop1 = Object.getOwnPropertyNames(obj1);
  const prop2 = Object.getOwnPropertyNames(obj2);

  console.log(prop1);
  console.log(prop2);

  if (prop1.length != prop2.length) {
    return false;
  }

  for (let i = 0; i < prop1.length; i++) {
    // Create an array with the properties so we can use after. Doesnt matter is if prop1 or prop2, they both have the same properties as filtered on the previous if statement.
    const properties = prop1[i];

    if (obj1[properties] !== obj2[properties]) {
      return false;
    }
  }

  return true;
}

console.log(isSameObject(user1, user2));
