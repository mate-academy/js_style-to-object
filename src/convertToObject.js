'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString
    .split(';').map((element) => element.trim())
    .filter((element) => element !== '' && element !== ';')
    .map((element) => element.split(':'));

  const result = splittedString
    .map(([key, value]) =>
      [key.trim(), value.trim()])
    .reduce((acc, currentValue) => {
      const [key, value] = currentValue;

      acc[key] = value;

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
