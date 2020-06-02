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
  const preparedAttributes = sourceString.split(';');

  const result = {};

  preparedAttributes.forEach(item => {
    const attribute = item.split(':');

    if (attribute[1]) {
      result[attribute[0].trim()] = attribute[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
