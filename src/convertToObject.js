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
  const cssObj = {};

  const splitedSource = sourceString.split(';').filter(el => el.includes(':'));
  
  for (const el of splitedSource) {
    const seperator = el.indexOf(':');
    const value = el.slice(seperator + 1).trim();
    const key = el.slice(0, seperator).trim();

    cssObj[key] = value;
  }

  return cssObj;
}

module.exports = convertToObject;
