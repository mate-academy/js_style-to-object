'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const array1 = sourceString.split(';');

  const cleanedArray = array1
    .map((el) => el.replace(/\n/g, ''))
    .filter((el) => el.includes(':')); // Ignore empty lines

  const obj = {};

  cleanedArray.forEach((el) => {
    const [key, value] = el.split(':'); // Split key and value
    let valueFormatted;

    if (key && value) {
      if (value.includes(',')) {
        valueFormatted = value
          .split(',')
          .map((part) => part.trim())
          .join(',\n          ');
      }
      obj[key.trim()] = valueFormatted || value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
