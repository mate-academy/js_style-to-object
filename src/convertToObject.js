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
// eslint-disable-next-line space-before-function-paren
function convertToObject(sourceString) {
  const obj = {};
  const props = sourceString.split(';');

  props.forEach((prop) => {
    if (prop.trim() && prop !== ';') {
      const keyValues = prop.split(':');

      obj[keyValues[0].trim()] = keyValues[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
