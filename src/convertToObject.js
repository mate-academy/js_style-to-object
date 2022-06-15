'use strict';

function convertToObject(sourceString) {
  const arrOfProps = sourceString.split(';')
    .map(prop => prop.trim())
    .filter(prop => prop.length > 0)
    .map(prop => prop.split(':').map(element => element.trim()));

  const objectOfStyles = Object.fromEntries(arrOfProps);

  return objectOfStyles;
}

module.exports = convertToObject;
