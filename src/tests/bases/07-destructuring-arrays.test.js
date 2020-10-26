import '@testing-library/jest-dom';
import { returnArray } from '../../bases/07-destructuring-arrays';

describe('Tests in 07-destructuring-arrays.js', () => {
  test('returnArray method must return a string and a number', () => {
    const [letters, numbers] = returnArray();

    //expect(arr).toEqual(['ABC', 123]);
    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
  
});