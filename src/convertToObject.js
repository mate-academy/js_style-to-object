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
  const separateStrings = sourceString.split(';')
    .map(element => element.split(':'));
  const stringFilter = separateStrings
    .map(element => element.map(elementTrim => elementTrim.trim()))
    .filter(element => element.length > 1)
    .reduce((step, item) => {
      return {
        ...step,
        [item[0]]: item[1],
      };
    }, {});

  return stringFilter;
}

module.exports = convertToObject;
