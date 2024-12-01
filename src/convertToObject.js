'use strict';

/**
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
