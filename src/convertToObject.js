'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  return sourceString
    .split(';')
    .filter((item) => item.trim())
    .map((item) => {
      const [key, value] = item.split(':');

      return [key.trim(), value.trim()];
    })

    .reduce((acc, [key, value]) => {
      return { ...acc, [key]: value };
    }, {});
}

module.exports = convertToObject;
