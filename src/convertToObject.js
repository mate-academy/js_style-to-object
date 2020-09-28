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
  const cssArray = sourceString.split(';');
  const result = {};

  cssArray.forEach(rule => {
    const splitRule = rule.split(':');

    if (splitRule[0] && splitRule[1]) {
      result[splitRule[0].trim()] = splitRule[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
