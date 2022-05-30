'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example 
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStr = sourceString.replace('\n ', '');
  const rows = newStr.split(';\n')
    .map(el => el.trim())
    .filter(el => el.length > 0);

  const res = {};

  for (const rule of rows) {
    const tmp = rule.split(':');
    const tmp2 = tmp.map(el => el.trim());

    res[tmp2[0]] = tmp2[1];
  }

  return res;
}

module.exports = convertToObject;
