// => Falsey values

// undefined
// false
// null
// NaN
// '' or ""
// 0

console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));

// => Confusing values
console.log(Boolean([]));
console.log(Boolean({}));
