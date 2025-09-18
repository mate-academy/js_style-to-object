'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .split(';')
    .filter((el) => el.trim() !== '')
    .map((el) => el.split(':'))
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
