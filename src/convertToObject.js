'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const rules = sourceString
    .split(';')
    .map(rule => rule.split(':')
      .map(value => value.trim()));

  return rules.reduce((cssObj, [prop, value]) => {
    if (prop && value) {
      cssObj[prop] = value;
    }

    return cssObj;
  }, {});
}

module.exports = convertToObject;
