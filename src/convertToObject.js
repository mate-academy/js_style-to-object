'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';')
    .filter(v => v.trim().length > 0)
    .reduce((acc, cur) => {
      const value = cur.split(':').map(v => v.trim());

      return {
        ...acc,
        [value[0]]: value[1],
      };
    }, {});
}

module.exports = convertToObject;
