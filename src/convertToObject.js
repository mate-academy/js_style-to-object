'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredArray = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean);
  const styleObject = {};

  for (const element of filteredArray) {
    const [property, value] = element.split(':').map((part) => part.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
