// INTERFACES
// Work similar to the 'type' keyword except for it cannot be used with unions or
// primitives, that's why preferably we use for objects.
interface interfaceUser {
    name: string
    last: string
    age?: number         // Optional property
    readonly id: number  // Read only property

}
const otherUser: interfaceUser = {
    name: "Carlos",
    last: "Trujillo",
    id: 1
}

// type User: string | number (valid)
// const user: User = "Carlos"

// interface user: string | number (invalid)
// const user: User = "Carlos"

//
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (a: number, b: number): number => a + b
const sub: MathFunc = (a: number, b: number): number => a - b
//

//
interface PersonInterface {
    register(): string
}
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }

    register() {
      return `${this.name} is now registered`
    }
}
//

//
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position
    }
  }

  const emp = new Employee(3, 'Carlos', 'Developer')
//