// console.log('Hello!');

// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroeById(5));


// console.log('-------------------------------------');


export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));