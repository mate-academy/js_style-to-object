'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceStrings) {
  const styleObject = {};
  const styleArray = sourceStrings.split(';');

  styleArray.forEach((sourceString) => {
    const [property, value] = sourceString
      .split(':')
      .map((item) => item.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
