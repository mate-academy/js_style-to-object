'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Split the source string into lines and remove empty lines
  let lines = sourceString.split('\n').filter((line) => line.trim() !== '');

  const obj = {};
  let currentKey = '';
  let currentValue = '';

  lines.forEach((line) => {
    // Check if the line contains a colon, indicating a new key-value pair
    if (line.includes(':')) {
      // If there's already a current key, it means we've
      // accumulated a multiline value
      if (currentKey) {
        obj[currentKey] = currentValue.trim();
        currentKey = ''; // Reset for the next key-value pair
        currentValue = ''; // Reset for the next key-value pair
      }

      // Extract the key and value from the line
      const [key, value] = line.split(':');
      currentKey = key.trim();
      currentValue = value.trim();
    } else {
      // Accumulate the value if it's part of a multiline value
      currentValue += ' ' + line.trim();
    }
  });

  // Add the last key-value pair if it hasn't been added yet
  if (currentKey) {
    obj[currentKey] = currentValue.trim();
  }

  return obj;
}

module.exports = convertToObject;
