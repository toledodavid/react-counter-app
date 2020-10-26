// console.log('Hello!');
import {getHeroeById} from './08-import-export';


export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const hero = getHeroeById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('Hero not found');
      }

    }, 1500);
  });
}

// getHeroByIdAsync(2).then(console.log).catch(console.warn);

