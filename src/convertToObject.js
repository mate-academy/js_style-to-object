'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObj = {};
  const splitedArr = sourceString.split(';').map(el => el.split(':'));

  splitedArr.forEach(el => {
    if (el.length > 1) {
      const objKey = el[0].trim();
      const objVal = el[1].trim();

      resObj[objKey] = objVal;
    }
  });

  return resObj;
}

module.exports = convertToObject;
