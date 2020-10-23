

const name = 'David';
const lastName = 'Toledo';

const completeName = `
${name}
${lastName}
  ${2 + 2}
`;

//console.log(completeName);

export function getSaludo(name = 'Juan') {
  return 'Hello ' + name;
}

//console.log(`This is a text: ${getSaludo(name)}`);