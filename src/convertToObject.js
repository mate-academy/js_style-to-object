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
  const arr = sourceString.split(';');
  let result = {};

  arr.forEach(item => {
    if (item.trim() !== '') {
      const styleForObject = item.split(':');

      result = {
        ...result,
        [styleForObject[0].trim()]: styleForObject[1].trim(),
      };
    }
  });

  return result;
}

module.exports = convertToObject;
