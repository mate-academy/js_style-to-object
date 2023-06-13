'use strict';

function convertToObject(sourceString) {
  const arrayOfProps
  = sourceString
    .split(';')
    .map(prop => prop.trim())
    .filter(prop => prop !== '');

  const output = arrayOfProps.reduce((acc, curr) => {
    const [key, value] = curr.split(':');
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    acc[trimmedKey] = trimmedValue;

    return acc;
  }, {});

  return output;
}

module.exports = convertToObject;
