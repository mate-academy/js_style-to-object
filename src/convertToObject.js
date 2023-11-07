'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el)
    .map(el => el.split(': '))
    .forEach(el => {
      stylesObject[el[0].trimEnd()] = el[1].trimStart();
    });

  return stylesObject;
}

module.exports = convertToObject;
