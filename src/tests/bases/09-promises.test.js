import '@testing-library/jest-dom';
import { getHeroByIdAsync }  from '../../bases/09-promises';
import heroes from '../../data/heroes';

describe('Tests for 09-promises,js', () => {

  test('getHeroByIdAsync must return a hero async', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then(hero => {
      expect(hero).toEqual(heroes[0]);
      done();
    });
  });

  test('getHeroByIdAsync must return an error if id hero does not exits', (done) => {
    const id = 100;
    getHeroByIdAsync(id).catch(err => {
      expect(err).toBe('Hero not found');
      done();
    });
  });

});