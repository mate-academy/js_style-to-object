'use strict';

function convertToObject(sourceString) {
  const convertStrings = sourceString
    .split(';\n')
    .map(convertString => convertString.trim())
    .filter(convertString => (convertString.length !== 0));

  const obj = {};

  convertStrings.map(convertString => {
    const [key, value] = convertString.split(':').map(part => part.trim());

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
