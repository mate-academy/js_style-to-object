'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.split(';');

  return styleLines.reduce((stylesObject, line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return stylesObject;
    }

    const [property, value] = trimmedLine.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
