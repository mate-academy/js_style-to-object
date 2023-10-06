'use strict';

function convertToObject(sourceString) {
  const result = {};
  const sourceArray = sourceString.split(';');

  for (const element of sourceArray) {
    element.split(':');

    const smallArray = element.split(':');

    if (smallArray.length > 1) {
      result[smallArray[0].trim()] = smallArray[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
