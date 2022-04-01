// A way to selectively work with objects and array.

const [month, day, year] = [08, 09, 1990];
console.log(`${month}/${day}/${year}`);

const { name: firstName, nickname } = {
  last: "Doe",
  name: "John",
  middle: "Arthur",
  nickname: "Johnny",
};
console.log(firstName);
console.log(nickname);
