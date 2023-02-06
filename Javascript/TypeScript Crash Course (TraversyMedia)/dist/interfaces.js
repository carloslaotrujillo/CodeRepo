"use strict";
const otherUser = {
    name: "Carlos",
    last: "Trujillo",
    id: 1
};
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Carlos', 'Developer');
