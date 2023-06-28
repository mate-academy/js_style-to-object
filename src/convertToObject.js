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
  const stylesObj = {};
  const arrStyles = sourceString
    .split(';')
    .map(str => str.trim())
    .filter(style => style.length > 0)
    .map(element => element.split(':').map(property => property.trim()));

  arrStyles.forEach(property => {
    const [prop, value] = property;

    stylesObj[prop] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
