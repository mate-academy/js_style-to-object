'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const rows = sourceString
    .trim()
    .split(';')
    .map((e) => e.split(':'));

  rows.forEach((row) => {
    const [property, value] = row;

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
