'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const cssProperties = {};

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '' || !trimmedLine.includes(':')) {
      return;
    }

    const [property, value] = trimmedLine.split(':').map((part) => part.trim());

    if (property && value) {
      cssProperties[property.trim()] = value.trim();
    }
  });

  return cssProperties;
}
module.exports = convertToObject;
