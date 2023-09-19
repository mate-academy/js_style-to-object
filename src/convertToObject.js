'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((result, str) => {
      const [key, value] = str.split(':').map(el => el.trim());

      if (key && value) {
        result[key] = value;
      };

      return result;
    }, {});
}

module.exports = convertToObject;
