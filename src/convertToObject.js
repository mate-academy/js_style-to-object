'use strict';

function convertToObject(sourceString) {
  return sourceString.split(/[:;]/)
    .map((property) => property.trim())
    .filter((str) => str.length > 0)
    .reduce((object, x, index, arr) => {
      if (index % 2 === 0) {
        object[x] = arr[index + 1];
      }

      return object;
    }, {});
}

module.exports = convertToObject;
