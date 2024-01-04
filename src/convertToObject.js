'use strict';

function convertToObject(sourceString) {
  return sourceString.split(';')
    .reduce((acc, line) => {
      const [key, value] = line.split(':').map(item => item.trim());

      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
