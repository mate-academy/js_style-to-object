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
  const stylesArr = sourceString.split('\n');
  const withoutEmpty = stylesArr.filter(element => element !== '');
  const strWithoutSpaces = withoutEmpty.map(str => str.trim());
  const withoutSemicolons = strWithoutSpaces.filter(element => element !== ';');
  const keysAndValues = withoutSemicolons.map(element => element.split(':'));
  const finalObj = {};

  keysAndValues.map(([key, value]) =>
    (finalObj[key.trim()] = value.replace(/;/g, '').trim()));

  return finalObj;
}

module.exports = convertToObject;
