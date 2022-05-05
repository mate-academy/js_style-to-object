/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyles = {};
  const arrayStyles = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length !== 0);

  arrayStyles.forEach(element => {
    const key = element.split(':')[0].trim();
    const value = element.split(':')[1].trim();

    objStyles[key] = value;
  });

  return objStyles;
}

module.exports = convertToObject;
