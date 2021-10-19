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
  const resultObject = {};

  sourceString.split(';')
    .map(line => line.trim())
    .filter(x => x.length > 0)
    .map(property => property.split(':')
    .map(x => x.trim()))
    .map(element => {
      resultObject[element[0]] = element[1];
    });

  return resultObject;
}

module.exports = convertToObject;
