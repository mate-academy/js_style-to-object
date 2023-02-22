'use strict';

function convertToObject(sourceString) {
  const newObject = {};

  const arrCopy = sourceString.split(';');

  arrCopy.map((item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      newObject[key.trim()] = value.trim();
    }
  });

  return newObject;
}

module.exports = convertToObject;
