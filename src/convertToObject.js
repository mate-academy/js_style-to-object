'use strict';

/**
 * Converts CSS string to object.
 *
 * @param {string} sourceString CSS code.
 *
 * @return {Object} CSS code converted to keys and values.
 */
function convertToObject(sourceString) {
  return (
    sourceString
      // Handle cases where the string might start with whitespace or semicolons
      .trim()
      // Breaks sourceString by semicolon into separate stings
      .split(';')

      // Breaks line into property and value and removes extra space charachters
      .map((line) => line.split(':').map((el) => el.trim()))

      // Leaves only valid elements
      .filter(
        (el) =>
          el.length === 2 &&
          // Robust check that both elements are not empty strings
          el.every((element) => element !== ''),
      )

      // Generate object from the array
      .reduce((acc, [item, value]) => {
        acc[item] = value;

        return acc;
      }, {})
  );
}

module.exports = convertToObject;
