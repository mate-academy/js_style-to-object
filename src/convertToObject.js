'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const obj = {};

  function removeGap(array) {
    return arr.map(elem => elem.trim());
  }

  const arrWithoutEmpy = (removeGap(arr)).filter(elem => elem.length > 0);
  const pair = arrWithoutEmpy.map(item => item.split(':'));

  for (let i = 0; i < pair.length; i++) {
    let [key, value] = pair[i];

    key = key.trim();
    value = value.trim();
    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
