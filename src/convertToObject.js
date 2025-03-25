'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0)
    .reduce((stylesObject, item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      stylesObject[key] = value;

      return stylesObject;
    }, {});

  return result;
}

module.exports = convertToObject;
