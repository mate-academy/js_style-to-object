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
  let oneString = sourceString.split(';').map(el => el.trim());

  oneString = oneString.filter(el => el.length > 1);

  const oneValue = oneString.map(el => el.split(':').map(prop => prop.trim()));

  return Object.fromEntries(oneValue);
}

module.exports = convertToObject;
