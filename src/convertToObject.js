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
  const cssPropsList = sourceString
    .split('\n')
    .map(prop => prop.replace(';', '').split(':').map(value => value.trim()))
    .filter(prop => prop.length > 1);

  const cssPropsObj = cssPropsList.reduce((obj, [key, value]) => {
    obj[key] = value;

    return obj;
  }, {});

  return cssPropsObj;
}

module.exports = convertToObject;
