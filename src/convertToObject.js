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
  const convertObject = {};

  sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .map(([prov, value]) =>
      ((prov && value) ? (convertObject[prov.trim()] = value.trim()) : false));

  return convertObject;
}

module.exports = convertToObject;
