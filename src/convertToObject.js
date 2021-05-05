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
  const result = {};
  const trimed = sourceString.split(';').map(element => element.trim());
  const noEmpty = trimed.filter(word => word !== '');
  const pairs = noEmpty.map(element => element.split(':'));

  pairs.forEach(element => {
    result[element[0].trim()] = element[1].trim();
  });

  return result;
}

module.exports = convertToObject;
