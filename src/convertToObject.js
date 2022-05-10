'use strict';

function convertToObject(sourceString) {
  const newObj = {};
  const array = sourceString.split(';');

  array.forEach(item => {
    const values = item.split(':');

    if (values.length === 2) {
      newObj[values[0].trim()] = values[1].trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
