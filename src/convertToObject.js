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
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => {
      return item.split(':').map((x) => {
        return x
          .split(',')
          .map((y, index) => {
            return index === 0 ? y.trim() : `          ${y.trim()}`;
          })
          .join(',\n');
      });
    })
    .reduce((acc, item) => {
      acc[`${item[0]}`] = item[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
