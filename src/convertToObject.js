'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const divideIntoParts = sourceString.split(';');

  const makeAnObject = divideIntoParts.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split(':').map(item => item.trim());

    if (key && value) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});

  return makeAnObject;
}

module.exports = convertToObject;
