'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an
 * object where CSS properties are keys
 * and values are the
 * values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  // Split the input stylesString into an array of lines
  const stylesArray = stylesString.split('\n');

  // Initialize an empty object to store the CSS properties and values
  const stylesObject = {};

  // Iterate over each line in the stylesArray
  for (const style of stylesArray) {
    // Split each line into
    // a property and a value using the colon (:) as the separator
    const [property, value] = style.split(':').map(item => item.trim());

    // Check if both property and value are non-empty
    if (property && value) {
      // Remove trailing semicolon from the value if it exists
      const cleanedValue = value.endsWith(';') ? value.slice(0, -1) : value;

      // Trim any leading or trailing spaces from the property value
      stylesObject[property] = cleanedValue.trim();
    }
  }

  // Return the resulting object with
  // CSS properties as keys and cleaned values as values
  return stylesObject;
}

module.exports = convertToObject;
