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
  // write your code here
  const props = sourceString.split(';');
  const styleObject = {};

  props.map(prop => {
    const i = prop.trim().split(':');

    if (i.length > 1) {
      const key = i[0].trim();
      const value = i[1].trim();

      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
