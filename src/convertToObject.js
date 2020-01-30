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
  const result = sourceString
    .split(';')
    .reduce((acc, style, index) => {
      const [prop, value] = style.trim().split(':')
        .map(element => element.trim());

      if (value !== undefined) {
        acc[prop] = value;
      }

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
