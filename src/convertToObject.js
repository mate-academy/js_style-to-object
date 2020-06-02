'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
/* eslint-disable */
function convertToObject(sourceString) {
  const regexp = /([a-z-]+)\s*:\s*([a-z0-9!\-.#() ]+)/g;
  const obj = {};

  for (const i of sourceString.matchAll(regexp)) {
    console.log(i[1], i[2]);
    obj[i[1]] = i[2].trim();
  }

  return obj;
}

const str = 'font-weight:400; fda'
convertToObject(str);
module.exports = convertToObject;
