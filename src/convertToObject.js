'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lineString = sourceString.split('\n');
  const styleObject = {};

  for (const line of lineString) {
    const [key, value] = line
      .split(':')
      .map((data) => data.replace(';', '').trim());

    if (key && value) {
      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
