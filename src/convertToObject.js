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
  let stringStyles = '';
  const newStr = sourceString.replace(/\n/g, '');
  const objectStyles = {};

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== ' ') {
      stringStyles += newStr[i];
    } else if (newStr[i] === ' ' && newStr[i - 1] === ':') {
      stringStyles += newStr[i];
    } else if (newStr[i] === ' ' && newStr[i + 1] !== ' '
      && newStr[i - 1] !== ' ') {
      stringStyles += newStr[i];
    }
  }

  const arrayStyles = stringStyles.split(';').filter(part => part.length > 1);

  for (let i = 0; i < arrayStyles.length; i++) {
    const styles = arrayStyles[i].split(':');

    objectStyles[styles[0]] = styles[1].slice(1);
  }

  return objectStyles;
}

module.exports = convertToObject;
