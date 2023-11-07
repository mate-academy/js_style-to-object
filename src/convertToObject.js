'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleCssList = {};
  const splitedString = sourceString.split(';');

  splitedString.forEach(el => {
    const listElement = el.split(':');
    const elementKey = listElement[0].trim();
    const elementValue = listElement[1].trim();

    if (elementKey && elementValue) {
      styleCssList[elementKey] = elementValue;
    }
  });

  return styleCssList;
}

module.exports = convertToObject;
