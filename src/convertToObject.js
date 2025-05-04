'use strict';

function convertToObject(sourceString) {
  const res = {};

  sourceString
    .trim()
    .split(';')
    .forEach((param) => {
      const [property, value] = param.split(':');

      if (property && value) {
        Object.assign(res, { [property.trim()]: value.trim() });
      }
    });

  return res;
}

module.exports = convertToObject;
