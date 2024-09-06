'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const styleStringObject = {};

  for (const property of properties) {
    const [key, value] = property.split(':').map((item) => item.trim());

    styleStringObject[key] = value;
  }

  return styleStringObject;
}

module.exports = convertToObject;
