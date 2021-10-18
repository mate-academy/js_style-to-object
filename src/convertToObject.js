'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .reduce((prev, current) => {
      const item = current.split(':').map((string) => string.trim());

      return {
        ...prev,
        [item[0]]: item[1],
      };
    }, {});
}

module.exports = convertToObject;
