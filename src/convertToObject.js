'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString.split('\n')
    .filter((element) => element.trim() !== '')
    .map((element) => element.replace(/;/g, '').trim());

  return newArr.reduce((styleObj, element) => {
    const [prop, val] = element.split(':');

    if (prop && val) {
      styleObj[prop.trim()] = val.trim();
    }

    return styleObj;
  }, {});
}

module.exports = convertToObject;
