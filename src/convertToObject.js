'use strict';

function convertToObject(sourceString) {
  const items = sourceString.split(';');

  const resultObject = {};

  items.forEach(elem => {
    if (elem.includes(':')) {
      const properties = elem.split(':');

      resultObject[properties[0].trim()] = properties[1].trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
