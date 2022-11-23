'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  let colonIndex;
  let beforeColon;
  let afterColon;
  const result = {};
  const filteredArr = arr.filter((elem) => {
    return elem.includes(':');
  });

  filteredArr.forEach((elem) => {
    colonIndex = elem.indexOf(':');
    beforeColon = elem.slice(0, colonIndex);
    afterColon = elem.slice(colonIndex + 1);
    result[beforeColon.trim()] = afterColon.trim();
  });

  return result;
}

module.exports = convertToObject;
