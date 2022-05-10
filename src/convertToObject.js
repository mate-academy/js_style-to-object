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
  // write your code here
  const strSplit = sourceString.split(';');
  const strFilter = strSplit.filter(el => el.trim());
  const strToObj = {};

  strFilter.forEach(x => {
    const [property, item] = x.split(':');
    const key = property.trim();
    const value = item.trim();

    strToObj[key] = value;
  });

  return strToObj;
}

module.exports = convertToObject;
