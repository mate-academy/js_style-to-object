'use strict';

function convertToObject(sourceString) {
  const object = {};
  const sourceArray = sourceString.split(';').filter(el => el.length > 5);

  for (let i = 0; i < sourceArray.length; i++) {
    const keyAndValue = sourceArray[i].split(':');

    const key = keyAndValue[0].trim();
    const value = keyAndValue[1].trim();

    object[key] = value;
  }

  return object;
}

module.exports = convertToObject;
