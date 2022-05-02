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
  let noSpaceStr = sourceString.replace(/\n/g, '');

  noSpaceStr = noSpaceStr.trim();

  const dividedStr = noSpaceStr.split(`;`);
  const cssObject = {};
  const arr = [];

  dividedStr.forEach(e => {
    if (e.indexOf(':') !== -1) {
      arr.push(e.split(': '));
    }
  });

  arr.forEach(e => {
    e[0] = e[0].trim();
    e[1] = e[1].trim();
    cssObject[e[0]] = e[1];
  });

  return cssObject;
}

module.exports = convertToObject;
