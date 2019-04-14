'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').map(el => el.slice(3).split(': '))
    .reduce((sum, curent) => {
      if (curent[1] !== undefined) {
        sum[curent[0]] = curent[1];
      };
      return sum;
    }, {});
}

module.exports = convertToObject;
