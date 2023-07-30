'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .map((styleStr) => styleStr.split(':').map(val => val.trim()))
    .filter(val => val.length === 2)
    .reduce((prev, next) => (
      {
        ...prev,
        [next[0]]: next[1],
      }
    ), {});
}

module.exports = convertToObject;
