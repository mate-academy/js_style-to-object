'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString.split(';')
    .map(element => element.trim()
      .split(':')
      .map(item => item.trim()))
    .filter(style => style.length > 1)
    .reduce((prev, [ property, propertyValue ]) => ({
      ...prev,
      [property]: propertyValue,
    }), {});

  return stylesObject;
}

module.exports = convertToObject;
