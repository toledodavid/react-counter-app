

test('Must be true', () => {
  const isActive = false;

  if (!isActive) {
    throw new Error('It is not Active');
  }
});