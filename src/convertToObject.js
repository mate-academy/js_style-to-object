'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((prev, next) => {
      const [key, value] = next.split(':');

      return (value)
        ? {
          ...prev,
          [key.trim()]: value.trim(),
        }
        : { ...prev };
    }, {});
}

module.exports = convertToObject;
