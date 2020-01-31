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
  const properties = sourceString.split(';');

  return properties.reduce((result, currentElement) => {
    const [key, value] = currentElement.split(':');

    if (value) {
      result[key.trim()] = value.trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
