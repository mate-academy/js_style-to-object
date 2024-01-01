'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Remove all symbols (line break(\n)) and split the line by (;)
  const convertStyle = sourceString.replace(/[\n\r]/g, '').split(';');

  // Create an empty object where we will collect the style keys and values
  const obj = convertStyle.reduce((prev, item) => {
    // Split the style string into key:value pairs
    const [key, value] = item.split(':');

    // Check whether we got the key:value
    if (key && value) {
      // Remove extra spaces from the beginning and end of the key and value
      prev[key.replace(/^\s+|\s+$/g, '')] = value.replace(/^\s+|\s+$/g, '');
    }

    return prev;
  }, {});

  // Return the object with CSS styles
  return obj;
}

module.exports = convertToObject;
