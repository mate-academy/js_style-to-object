'use strict';

function convertToObject(sourceString) {
  const res = {};

  const arrStr = sourceString.split('\n');

  for (const element of arrStr) {
    let newElement = element.trim();

    if (newElement.includes(':')) {
      newElement = newElement.split(':');

      const key = newElement[0].trim();
      let value = newElement[1].trim();

      value = value.replace(';', '');

      res[key] = value.trim();
    }
  }

  return res;
}

module.exports = convertToObject;
