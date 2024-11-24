'use strict';

function convertToObject(sourceString) {
  const array = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str !== '')
    .map((str) => str.split(/\s*:\s*/));
  const obj = {};

  array.forEach((element) => {
    obj[element[0]] = element[1];
  });

  return obj;
}

module.exports = convertToObject;
