'use strict';

function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((row) => row.trim())
    .reduce((acc, el) => {
      if (!el) {
        return acc;
      }

      return {
        ...acc,
        [el.split(':')[0].trim()]: el.split(':')[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
