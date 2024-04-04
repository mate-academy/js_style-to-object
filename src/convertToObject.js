'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = sourceString
    .split(';')
    .map((style) => style.split(':'))
    .filter((style) => style.length > 1)
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});

  return stylesObj;
}

module.exports = convertToObject;
