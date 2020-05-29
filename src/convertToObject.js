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
  const arr = sourceString.replace(/\s{2,}/g, '').split(';').sort(
    function(a, b) {
      if (a > b) {
        return 1;
      };
    });
  const outputObject = {};

  for (let i = 0; i < arr.length; i++) {
    const property = arr[i].trim().split(':');

    if (property[0] !== '' && property[1] !== '') {
      outputObject[property[0] + ''] = property[1].trim();
    }
  }

  return outputObject;
}

module.exports = convertToObject;
