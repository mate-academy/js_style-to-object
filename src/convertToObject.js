'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const transformedString = sourceString
    .split(';')
    .map((el) => el.split(':').map((el1) => el1.trim()))
    .filter((el) => el.length > 1)
    .reduce((acu, item) => {
      acu[item[0]] = item[1]

      return acu;
    }, {})

  return transformedString;
}

module.exports = convertToObject;
