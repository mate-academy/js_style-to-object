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
  const styleObj = {};
  const styleArr = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .map(prop => prop.split(':'));

  for (const [prop, value] of styleArr) {
    styleObj[prop.trim()] = value.trim();
  }

  return styleObj;
}

module.exports = convertToObject;
