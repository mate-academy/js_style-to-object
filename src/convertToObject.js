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
  const stylesArr = sourceString
    .trim()
    .replace(/\n/g, '')
    .split(';')
    .filter(Boolean)
    .map(rule => rule.split(':'));

  const result = stylesArr.reduce((accum, [prop, style]) => {
    if (prop && style) {
      accum[prop.trim()] = style.trim();
    }

    return accum;
  }, {});

  return result;
}

module.exports = convertToObject;
