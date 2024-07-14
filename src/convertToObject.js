'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .trim()
    .split(';')
    .forEach((element) => {
      const [key, value] = element.split(':');

      if (value !== undefined) {
        obj[key.trim()] = value.trim().replace(/\\n/g, '\n');
      }
    });

  return obj;
}

module.exports = convertToObject;
