'use strict';

function convertToObject(sourceString) {
  const arrOfArrays = [];
  const arrOfProps = sourceString.split(';')
    .map(e => e.trim())
    .filter(e => e.length > 0);

  for (let prop of arrOfProps) {
    prop = prop.split(':').map(e => e.trim());
    arrOfArrays.push(prop);
  }

  const objectOfStyles = {};

  for (let i = 0; i < arrOfArrays.length; i++) {
    objectOfStyles[arrOfArrays[i][0]] = arrOfArrays[i][1];
  }

  return objectOfStyles;
}

module.exports = convertToObject;
