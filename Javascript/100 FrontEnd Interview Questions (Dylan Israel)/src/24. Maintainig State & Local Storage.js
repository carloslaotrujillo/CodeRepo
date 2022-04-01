// Using a 3rd Party Store like Redux
// Using Local Storage
// Using cookies
// Global variables (bad idea)

localStorage.setItem("firstName", "Marx");
console.log(localStorage.getItem("firstName")); // Marx

const user = JSON.stringify({
  name: "John",
  last: "Doe",
});

localStorage.setItem("user", user);
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "John", last: "Doe" }

localStorage.clear();
localStorage.removeItem();

// etc
