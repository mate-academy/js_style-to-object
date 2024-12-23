'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const convertedObject = sourceString
    .split(';')
    .filter((cssObject) => cssObject.length > 0)
    .reduce((acc, cssObject) => {
      const [key, value] = cssObject
        .split(':')
        .map((partOfObject) => partOfObject.trim());

      acc[key] = value;

      return acc;
    }, {});

  return convertedObject;
}

module.exports = convertToObject;
