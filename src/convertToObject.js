'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((styles) => styles.split(':'))
    .reduce((object, [key, value]) => {
      if (key && value !== undefined && value.trim() !== '') {
        object[key.trim()] = value.trim();
      }

      return object;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
