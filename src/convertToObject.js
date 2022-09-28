'use strict';
/* eslint-disable */
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
  const obj = {}
  const arr = sourceString.replace(/\s\s+/g, '')
  .replace('\n', '')
  .split(';')
  .slice(0, -1)
  .filter(item => !!item).map(string => { 
    return obj[`${string.split(':')[0]}`] = string.split(':')[1].trim()
  })
 return obj
}

module.exports = convertToObject;
