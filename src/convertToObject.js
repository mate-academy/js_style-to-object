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
  const sourceArr = sourceString.split(';');
  const resultObj = {};

  for (let i = 0; i < sourceArr.length; i++) {
    const style = sourceArr[i].split(':').filter(e => e.trim().length > 0);

    if (style.length > 0) {
      formater(style[0], style[1]);
    }
  }

  function formater(name, value) {
    const objKey = name.replace(/ /g, '').trim();
    const objValue = value.split(' ').filter(e => e.length > 0).join(' ');

    resultObj[objKey] = objValue;
  }

  return resultObj;
}

module.exports = convertToObject;
