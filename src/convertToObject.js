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
  const stylesArray = sourceString.split(';')
    .filter(style => style.trim() !== '') // Remove empty styles
    .map(style => style.trim()) // Trim leading/trailing spaces
    .map(style => style.split(':').map(prop => prop.trim()));

  const stylesObject = stylesArray.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
