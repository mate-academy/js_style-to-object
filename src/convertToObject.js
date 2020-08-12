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
  const result = {};

  arr.forEach(properties => {
    const style = properties.split(':');

    if (style[0] && style[1]) {
      result[style[0].trim()] = style[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
