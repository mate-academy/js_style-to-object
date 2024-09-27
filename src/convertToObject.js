/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssNormalized = {};

  sourceString
    .split(';')
    .forEach((element) => {
      const [property, value] = element.split(':');

      if (property && value) {
        const formattedProperty = property
          .replace('\n', '')
          .trim();

        cssNormalized[formattedProperty] = value.trim();
      }
    });

  return cssNormalized;
}

module.exports = convertToObject;
