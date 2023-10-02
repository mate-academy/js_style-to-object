'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};
  const sourceArr = sourceString.split(';');

  for (let sourceItem of sourceArr) {
    sourceItem = sourceItem.trim();

    if (sourceItem.length > 0) {
      const splitedItem = sourceItem.split(':');

      let [key, value] = splitedItem;

      key = key.trim();
      value = value.trim();

      stylesObj[key] = value;
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
