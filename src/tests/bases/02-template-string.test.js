import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';

describe('Tests in 02-template-strings.js', () => {
  test('getSaludo must return Hello David', () => {
    const name = 'David';
    const saludo = getSaludo(name);

    expect(saludo).toBe('Hello ' + name);
  });

  test('getSaludo must return Hello Juan if anything is passed as parameter', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hello Juan');
  });
});