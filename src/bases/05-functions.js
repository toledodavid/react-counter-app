// console.log('Hello!');

const greet = function(name) {
  return `Hello, ${name}`;
}

const greet2 = (name) => {
  return `Hello, ${name}`;
}

const greet3 = (name) => `Hello, ${name}`;

const greet4 = () => `Hello world`;

const getUser = () => ({
  uid: 'abc123',
  username: 'toledodavid'
});

console.log(greet('Juan'));
console.log(greet2('Ana'));
console.log(greet3('Maria'));
console.log(greet4());
console.log(getUser());


console.log('__________________Homework_______________');

const getActiveUser = (name) => ({
  uid: 'axee4',
  username: name
});

const activeUser = getActiveUser('Alex');

console.log(activeUser);