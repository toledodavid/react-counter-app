import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../bases/05-functions';


describe('Tests in 05-functions.js', () => {
  test('getUser must return an object', () => {
    const userTest = {
      uid: 'abc123',
      username: 'toledodavid'
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('getActiveUser must return an object with a username property passed as parameter', () => {
    const name = 'Alex';
    const activeUserTest = {
      uid: 'axee4',
      username: name
    };

    const activeUser = getActiveUser(name);

    expect(activeUser).toEqual(activeUserTest);
  });
});

