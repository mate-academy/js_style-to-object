'use strict';

const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().split(';');
  const resultObject = {};

  stylesArray.forEach(style => {
    if (style.trim() === '') {
      return;
    }

    const [styleProperty, styleValue] = style.split(':');
    const propertyName = styleProperty.trim();
    const propertyValue = styleValue.trim();

    resultObject[propertyName] = propertyValue;
  });

  return resultObject;
}

module.exports = convertToObject;
