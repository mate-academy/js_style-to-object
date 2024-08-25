'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const regex = /\n+|\t+/g;

  sourceString
    .replaceAll(regex, ' ')
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
    .forEach((element) => {
      result[`${element[0]}`] = element[1];
    });

  return result;
}

module.exports = convertToObject;
