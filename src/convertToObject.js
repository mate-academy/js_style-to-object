'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const prortiesArr = sourceString.split(';')
    .map(properties => properties.trim())
    .filter(remove => remove.length > 1)
    .map(element => element.split(':'));

  return (prortiesArr.reduce((prev, properties) => ({
    ...prev, [properties[0].trim()]: properties[1].trim(),
  }), {}));
}

module.exports = convertToObject;
