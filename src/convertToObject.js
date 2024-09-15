'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0)
    .reduce((object, item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      object[key] = value;

      return object;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
