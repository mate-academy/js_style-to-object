'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  sourceString
    .split(';')
    .forEach((element) => {
      const [property, value] = element.split(':');

      if (property && value) {
        const normalizedProperty = property.replace('\n', '').trim();

        cssObj[normalizedProperty] = value.trim();
      }
    });

  return cssObj;
}

module.exports = convertToObject;
