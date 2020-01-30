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
      let [key, value] = style;

      key = key.toString().trim();
      value = value.toString().trim();

      return {
        ...acc,
        [key]: value,
      };
    } else {
      return acc;
    }
  }, {});

  return result;
}

module.exports = convertToObject;
