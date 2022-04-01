// => this is used to access te current context
const exObj = {
  name: "Hello",
  last: "World",
  displayMessage: function () {
    return `${this.name} - ${this.last}`;
  },
};

console.log(exObj.displayMessage());
