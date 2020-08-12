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
  const array = sourceString.split(';');
  const result = {};

  const trimmedArray = array
    .map(item => item.split(':')
      .map(elem => elem.trim())
    );

  const filteredArray = trimmedArray.filter(item => item.length !== 1);

  filteredArray.forEach(item => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
