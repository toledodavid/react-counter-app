// console.log('Hello!');


const person = {
  name: 'Petter',
  age: 25,
  code: 'Spiderman',
  level: 75
}

/*console.log(person.name);
console.log(person.age);
console.log(person.code);*/

/*
const {age, name, code} = person;

console.log(name);
console.log(age);
console.log(code);
*/

const useContext = ({code, name, age, level=80}) => {
  //console.log(name, age, code, level);
  return {
    codeName: code,
    years: age,
    latlng: {
      lat: 23.2232354,
      lng: -10.232323
    }
  }
}

//returnPerson(person);

const {codeName, years, latlng:{lat:latitude, lng:longitude}} = useContext(person);

console.log(codeName, years);
console.log(latitude, longitude);

