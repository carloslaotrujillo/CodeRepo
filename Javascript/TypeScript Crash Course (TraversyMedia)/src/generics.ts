// GENERICS
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
  }

  let numArray = getArray<number>([1, 2, 3, 4])
  let strArray = getArray<string>(['brad', 'John', 'Jill'])

  //strArray.push(1) (Throws error)