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
  // write your code here
  const arrayStyles = sourceString.split(';')
    .map(property => property.split(':'));

  const deleteGap = arrayStyles
    .map(property => property.map(element => element.trim()))
    .filter(item => item.length > 1);

  return deleteGap.reduce((item, [key, value]) => ({
    ...item,
    [key]: value,
  }), {});
}

module.exports = convertToObject;
