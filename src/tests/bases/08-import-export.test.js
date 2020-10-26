import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../bases/08-import-export';
import heroes from '../../data/heroes';

describe('Tests in functions from 08-import-export.js', () => {
  test('It must return an hero by id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    
    const heroData = heroes.find(h => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test('It must return undefined if hero does not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });

  test('It must return an array with heroes from DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    
    const heroesData = heroes.filter(h => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test('It must return an array with 2 items with heroes from Marvel', () => {
    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });

  test('It must return an empty array if owner does not exist', () => {
    const owner = 'aaa';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(0);
  });
  
});