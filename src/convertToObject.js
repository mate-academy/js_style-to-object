'use strict';

function convertToObject(sourceString) {
  const object = {};
  const partsArray = sourceString.split(';');

  for (let i = 0; i < partsArray.length; i++) {
    const keyValue = partsArray[i].split(':');

    if (keyValue.length === 2) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      object[key] = value;
    }
  }

  return object;
}

module.exports = convertToObject;
