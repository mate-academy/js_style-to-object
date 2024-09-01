'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .filter((line) => line.trim() !== '')
    .reduce((object, el) => {
      const [key, value] = el.split(':').map((item) => item.trim());

      object[key] = value;

      return object;
    }, {});

  return obj;
}

module.exports = convertToObject;
