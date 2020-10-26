import '@testing-library/jest-dom';
import { getImage } from '../../bases/11-async-await';

describe('Tests with async-await and fetch in 11-async-await.js', () => {

  test('It must return url image', async() => {
    const url = await getImage();
    expect(url.includes('https://')).toBe(true);
  });

});