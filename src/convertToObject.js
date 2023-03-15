'use strict';

function convertToObject(sourceString) {
  const object = sourceString.split(';').reduce((obj, el) => {
    const arr = el.split(':');

    if (arr.length === 2) {
      obj[arr[0].trim()] = arr[1].trim();
    }

    return obj;
  }, {});

  return object;
}

module.exports = convertToObject;
