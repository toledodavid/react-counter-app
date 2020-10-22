
describe('Tests in demo.test.js file', () => {
  test('the two strings must be equals', () => {

    // 1. Inicializacion
    const message1 = 'Hello world';
  
    // 2. Estimulo
    const message2 = `Hello world`;
  
    // Observar el comportamiento
    expect(message1).toBe(message2);
  
  });
});
