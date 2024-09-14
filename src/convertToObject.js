'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const splitedStrs = sourceString.split(';');

  splitedStrs.forEach((splitedStr) => {
    if (splitedStr.trim()) {
      const [property, value] = splitedStr.split(':');

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
