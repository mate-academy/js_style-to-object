'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el)
    .map(el => el.split(': '))
    .forEach(el => {
      result[el[0].trimEnd()] = el[1].trimStart();
    });

  return result;
}

module.exports = convertToObject;
