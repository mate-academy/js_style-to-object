'use strict';

function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';\n');
  const sourceObj = {};

  sourceArr.forEach(property => {
    if (property !== '') {
      const [key, value] = property.split(':');

      if (value) {
        sourceObj[key.trim()] = value.trim();
      }
    }
  });

  return sourceObj;
}

module.exports = convertToObject;
