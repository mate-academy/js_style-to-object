'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const properties = sourceString.split(';').map((prop) => prop.split(':'));

  for (const property of properties) {
    if (property.length < 2) {
      continue;
    }

    const prop = property[0].trim();
    const value = property[1].trim();

    result[prop] = value;
  }

  return result;
}

module.exports = convertToObject;
