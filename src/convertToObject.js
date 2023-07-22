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
    .filter((element) => element.length >= 5)
    .map((element) => element.replace(';', ''));
  const styleObj = {};

  newArr.forEach((element) => {
    const [ prop, val ] = element.split(':');

    styleObj[prop.trim()] = val.trim();
  });

  return styleObj;
}

module.exports = convertToObject;
