'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  const cssProps = sourceString
    .split(';')
    .map(pair => pair.split(':'));

  cssProps.forEach(propValuePair => {
    if (propValuePair.length === 2) {
      const property = propValuePair[0].trim();
      const value = propValuePair[1].trim();

      cssObj[property] = value;
    }
  });

  return cssObj;
}

module.exports = convertToObject;
