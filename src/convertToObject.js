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
  const sourceArray = sourceString.split(';');

  const splitArray = sourceArray
    .map(item => item.split(':').map(elem => elem.trim()));

  const filteredArray = splitArray.filter(item => item.length > 1);

  const func = (styles, property) => ({
    ...styles,
    [property[0]]: property[1],
  });

  const result = filteredArray.reduce(func, {});

  return result;
}

module.exports = convertToObject;
