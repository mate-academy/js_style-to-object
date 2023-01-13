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
  const result = {};
  const stringArray = sourceString.split(';');
  const keysAndValues = stringArray.map(element => element.split(':'));

  const getProp = (str) => {
    if (str.length > 1) {
      const key = str[0].trim();
      const value = str[1].trim();

      result[key] = value;
    }
  };

  keysAndValues.forEach(prop => getProp(prop));

  return result;
};

module.exports = convertToObject;
