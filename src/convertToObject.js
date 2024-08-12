'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedElements = {};
  const styleElements = sourceString.split(';');

  for (const element of styleElements) {
    const [property, value] = element.split(':');

    if (value !== undefined) {
      convertedElements[`${property.trim()}`] = `${value.trim()}`;
    }
  }

  return convertedElements;
}

module.exports = convertToObject;
