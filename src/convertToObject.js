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
  const result = sourceString.split(';').reduce((acc, keyValue) => {
    const style = keyValue.split(':');

    if (style.length === 2) {
      const [key, value] = style;

      return {
        ...acc,
        [key.trim()]: value.trim(),
      };
    } else {
      return acc;
    }
  }, {});

  return result;
}

module.exports = convertToObject;
