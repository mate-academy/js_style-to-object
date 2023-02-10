'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
  .reduce((acc, current) => {
    if (current.includes(':')) {
      const [key, value] = current.split(':');

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}


module.exports = convertToObject;
