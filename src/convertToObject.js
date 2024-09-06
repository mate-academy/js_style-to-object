'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString.split(';').forEach((line) => {
    const trimmedLine = line.trim();

    const [property, value] = trimmedLine.split(':');

    if (property && value) {
      resultObject[property.trim()] = value.trim().replace(/;/, '');
    }
  });

  return resultObject;
}

module.exports = convertToObject;
