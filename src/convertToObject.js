'use strict';

function convertToObject(sourceString) {
  const objectOfStyles = {};

  sourceString.split(':')
    .map((el) => el.trim())
    .join(':')
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .forEach((el) => {
      const keyValue = el.split(':');

      objectOfStyles[keyValue[0]] = keyValue[1];
    });

  return objectOfStyles;
}

module.exports = convertToObject;
