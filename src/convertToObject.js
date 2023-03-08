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
  const propList = sourceString.split(';').filter(el => el.length > 4);

  return propList.reduce((prevEl, currEl) => {
    const [key, value] = currEl.split(':');

    prevEl[key.trim()] = value.trim();

    return prevEl;
  }, {});
}

module.exports = convertToObject;
