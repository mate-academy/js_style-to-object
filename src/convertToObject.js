'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStr = sourceString.replace(/\n/g, '');
  const objectStyles = {};

  const arrayStyles = newStr.split(';').filter(part => part.length > 2);

  for (let i = 0; i < arrayStyles.length; i++) {
    const styles = arrayStyles[i].split(':');

    objectStyles[styles[0].trim()] = styles[1].slice(1).trim();
  }

  return objectStyles;
}

module.exports = convertToObject;
