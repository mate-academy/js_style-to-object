'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objProp = {};

  sourceString.trim()
    .split(';')
    .map(item => item.split(':'))
    .filter(val => val.length > 1)
    .forEach(([key, value]) => {
      objProp[key.trim()] = value.trim();
    });

  return objProp;
}

module.exports = convertToObject;
