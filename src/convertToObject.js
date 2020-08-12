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
  const arrays = sourceString
    .split(';')
    .filter(el => el.trim().length > 3)
    .map(option => option.trim().split(':')
      .map((el) => el.trim())
    );

  arrays.forEach(property => {
    result[property[0]] = property[1];
  });

  return result;
}

module.exports = convertToObject;
