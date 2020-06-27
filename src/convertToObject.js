'use strict';

function convertToObject(sourceString) {
  const makeArr = sourceString.split(';').map(item => item.split(':'));
  const trimArr = makeArr.map(item => item.map(index => index.trim()));
  const filtrArr = trimArr.filter(item => item.length > 1);
  const objectFinal = {};

  for (const i in filtrArr) {
    objectFinal[filtrArr[i][0]] = filtrArr[i][1];
  };

  return objectFinal;
}
module.exports = convertToObject;
