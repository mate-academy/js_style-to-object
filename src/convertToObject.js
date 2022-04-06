'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arraySplit1 = sourceString.split(';');

  const arraySplit2 = arraySplit1.map(string => string.split(':'));

  const filteredArray = arraySplit2.filter(string => (string.length === 2));

  const styleObject = {};

  filteredArray.forEach(arrayStyleString => {
    styleObject[arrayStyleString[0].trim()] = arrayStyleString[1].trim();
  });

  return styleObject;
}

module.exports = convertToObject;
