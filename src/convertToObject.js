'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return (
    sourceString
      // Breaks sourceString by semicolon into separate stings
      .split(';')

      // Breaks line into property and value and removes extra space charachters
      .map((el) => el.split(':').map((x) => x.trim()))

      // Leaves only valid elements
      .filter((el) => el.length === 2)

      // Generate object from the
      .reduce((acc, [item, value]) => ({ ...acc, [item]: value }), {})
  );
}

module.exports = convertToObject;
