'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  const stylesObj = {};

  stylesArray.map(style => {
    let eachPair = style.split(':');

    eachPair = eachPair.map(pair => pair.trim());

    stylesObj[eachPair[0]] = eachPair[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
