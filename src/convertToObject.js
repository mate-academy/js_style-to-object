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
      let [prop, value] = style.trim().split(':');

      if (value !== undefined) {
        prop = prop.trim();
        value = value.trim();
        acc[prop] = value;
      }

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
