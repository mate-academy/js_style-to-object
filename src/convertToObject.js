'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}

*/

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((classLine) => classLine !== '')
    .reduce((object, classLine) => {
      const [key, values] = classLine.split(':');

      object[key.trim()] = values.trim();

      return object;
    }, {});
}
module.exports = convertToObject;
