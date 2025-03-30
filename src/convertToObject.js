'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const stylesObject = {};

  lines.forEach((line) => {
    const [property, ...valueParts] = line
      .split(':')
      .map((part) => part.trim());

    if (property && valueParts.length) {
      const value = valueParts.join(':').trim();

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
