'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleResult = {};
  const styleString = sourceString.split(';');

  styleString.forEach(property => {
    const [key, value] = property.split(':');

    if (!key) {
      return styleResult;
    }

    if (key && value) {
      styleResult[key.trim()] = value.trim();
    }
  });

  return styleResult;
}

module.exports = convertToObject;
