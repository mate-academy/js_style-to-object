'use strict';

function convertToObject(sourceString) {
  const stringToObject = sourceString
    .split(';')
    .map((keyValue) => {
      return keyValue.split(':').map((withoutSpace) => withoutSpace.trim());
    })
    .reduce((storageValue, currentValue) => {
      storageValue[currentValue[0]] = currentValue[1];

      return storageValue;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
