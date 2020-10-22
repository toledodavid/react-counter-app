// console.log('Hello!');

import {getHeroeById} from './08-import-export';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     const hero = getHeroeById(3);
//     if (hero) {
//       resolve(hero);
//     } else {
//       reject('Hero not found');
//     }

//   }, 2000);
// });

// promise.then((data) => {
//   console.log('hero', data);
// }).catch((err) => {
//   console.warn(err);
// });


const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const hero = getHeroeById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('Hero not found');
      }

    }, 2000);
  });
}

getHeroByIdAsync(2).then(console.log).catch(console.warn);

