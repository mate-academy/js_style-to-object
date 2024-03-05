'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.trim().split(';').filter(Boolean);
  const styleObject = {};

  styleLines.forEach((line) => {
    const [propertyName, propertyValue] = line.trim().split(':').map(part => part.trim());

    if (propertyName && propertyValue) {
      styleObject[propertyName] = propertyValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
