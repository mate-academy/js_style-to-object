'use strict';
/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .split(';\n')
    .map(el => el.split(':'))
    .filter(prop => prop.length === 2)
    .reduce((stylesObj, [key, value]) => {
      stylesObj[key.trim()] = value.trim();

      return stylesObj;
    }, {});
}

module.exports = convertToObject;
