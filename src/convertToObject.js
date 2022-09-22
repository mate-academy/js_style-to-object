'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](
 * ./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let sourceArray = sourceString.split(';').join(':').split(':');

  sourceArray = sourceArray.map(element => (element.trim()));

  sourceArray = sourceArray.filter(element => (element.length > 0));

  const keyArray = [];
  const valuesArray = [];

  for (let i = 1; i < sourceArray.length; i += 2) {
    valuesArray.push(sourceArray[i]);
    keyArray.push(sourceArray[i - 1]);
  }

  const object = keyArray.reduce((prev, key, index) => {
    return {
      ...prev,
      [`${key}`]: valuesArray[index],
    };
  }, {});

  return object;
}

module.exports = convertToObject;
