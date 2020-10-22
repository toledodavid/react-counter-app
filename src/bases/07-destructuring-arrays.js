// console.log('Hello!');

const characters = ['Vegueta', 'Goku', 'Trunks'];
const [ , p2] = characters;
const [ , , p3] = characters;
console.log(p2);
console.log(p3);

console.log('---------------------------------');

const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters);
console.log(numbers);

console.log('--------------------------------');

const useState = (value) => {
  return [value, () => {console.log('Hello world')}];
}

const [name, setName] = useState('Piccolo');

console.log(name);
setName();