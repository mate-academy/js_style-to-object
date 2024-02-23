'use strict';

function convertToObject(sourceString) {
  const result = {};
  const sourceArr = sourceString.split(';');

  for (let i = 0; i < sourceArr.length; i++) {
    const [key, value] = sourceArr[i].split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
