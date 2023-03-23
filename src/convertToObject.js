'use strict';

// Implement convertToObject function:
// eslint-disable-next-line max-len
// Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
// and returns an object where CSS properties are keys
// eslint-disable-next-line max-len
// and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleCssObject = {};
  const fromStringToArray = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .filter(elem => elem.length !== 1)
    .map(elem => elem.map(elem2 => elem2.trim()));

  fromStringToArray.forEach(item => {
    const key = item[0];
    const property = item[1];

    styleCssObject[key] = property;
  });

  return styleCssObject;
}

module.exports = convertToObject;
