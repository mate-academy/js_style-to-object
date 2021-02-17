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
  const splitBySemicolon = sourceString.split(';');

  return splitBySemicolon.reduce((arr, value) => {
    const splitByColon = value.split(':');

    if (splitByColon.length !== 1) {
      arr[splitByColon[0].trim()] = splitByColon[1].trim();
    }

    return arr;
  }, {});
}

module.exports = convertToObject;
