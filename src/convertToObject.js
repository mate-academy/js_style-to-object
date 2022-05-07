'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(':')
    .map(item => item.trim())
    .join(':')
    .split('\n')
    .join('')
    .split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .forEach(item => {
      const keyAndValue = item.split(':');

      result[keyAndValue[0]] = keyAndValue[1];
    });

  return result;
}

module.exports = convertToObject;
