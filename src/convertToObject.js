'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleProperties = {};
  const styleElements = sourceString.split(';');

  for (const element of styleElements) {
    const [property, value] = element.split(':').map((item) => item.trim());

    if (property && value) {
      styleProperties[property] = value;
    }
  }

  return styleProperties;
}

module.exports = convertToObject;
