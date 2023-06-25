'use strict';

function convertToObject(sourceString) {
  const resObject = {};

  sourceString.split(';').forEach(partOfArr => {
    const arr = partOfArr.split(':');

    if (arr.length === 2) {
      resObject[arr[0].trim()] = arr[1].trim();
    }
  });

  return resObject;
}

module.exports = convertToObject;
