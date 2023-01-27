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
  const filterArr = sourceString.split(';').filter(value => value.length > 4);

  return filterArr.reduce((prevElem, currentElem) => {
    const [key, value] = currentElem.split(':');

    prevElem[key.trim()] = value.trim();

    return prevElem;
  }, {});
}

module.exports = convertToObject;
