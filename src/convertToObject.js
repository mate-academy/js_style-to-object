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
  const styleSheetsArray = sourceString
    .split('\n')
    .filter((value) => value.length > 3)
    .map((value) => value.replace(/;/g, ''))
    .map(value => value.trim())
    .map((value) => value.split(':'))
    .sort((value1, value2) =>
      value1.toString().localeCompare(value2.toString()));

  const objectOfCssValues = styleSheetsArray.reduce((objectOfCssValues, value) => {
    const [key, val] = value;

    objectOfCssValues[key.trim()] = val.trim();

    return objectOfCssValues;
  }, {});

  return objectOfCssValues;
}

module.exports = convertToObject;
