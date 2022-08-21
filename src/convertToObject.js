'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayConvert = sourceString.split(';\n');
  const arrayFilterEmpty = arrayConvert.filter(item => item.includes(':'));
  const result = {};

  const toObject = (object, string) => {
    const converted = string.split(':');
    const key = converted[0].trim();
    const value = converted[1].trim();

    object[key] = value;
  };

  arrayFilterEmpty.forEach(item => toObject(result, item));

  return result;
}

module.exports = convertToObject;
