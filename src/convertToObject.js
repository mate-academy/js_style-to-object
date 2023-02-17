'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString.split(';');
  const mapWorking = newString
    .map(line => line.split(':'))
    .filter(arr => arr.length === 2);
  const result = {};

  mapWorking.forEach(arr => {
    const obj = {};

    obj[arr[0].trim()] = arr[1].trim();
    Object.assign(result, obj);
  });

  return result;
}

module.exports = convertToObject;
