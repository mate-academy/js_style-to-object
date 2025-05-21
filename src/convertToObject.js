'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const propertiesArr = sourceString.split(';');

  for (const property of propertiesArr) {
    const cleanedPropery = property.trim();

    const [key, ...valueParts] = cleanedPropery.split(':');

    if (key === undefined || valueParts.length === 0) {
      continue;
    }

    const value = valueParts.join().trim();

    result[key.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
