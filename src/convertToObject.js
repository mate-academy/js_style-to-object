'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedSourceString = sourceString.replace(/\t+/g, ' ').trim();
  const styleStrings = cleanedSourceString.split(';');

  return styleStrings.reduce((acc, styleString) => {
    if (styleString.trim()) {
      const [property, ...valueParts] = styleString.split(':');
      const value = valueParts.join(':').trim();

      if (property && value) {
        acc[property.trim()] = value;
      }
    }

    return acc;
  }, {});
}
module.exports = convertToObject;
