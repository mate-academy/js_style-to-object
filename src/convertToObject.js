'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const attrArray = sourceString.split(';').map(str => str.trim());
  const result = attrArray.filter(el => el !== '').reduce((target, key) => {
    const item = key.split(':');

    target[item[0].trim()] = item[1].trim();

    return target;
  }, {});

  return result;
}

module.exports = convertToObject;
