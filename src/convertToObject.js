'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .join('')
    .split('\n')
    .reduce((accum, item) => {
      const [key, value] = item.split(':');

      if (key === undefined || value === undefined) {
        return accum;
      }

      accum[key.trim()] = value.trim();

      return accum;
    }, {});
}

module.exports = convertToObject;
