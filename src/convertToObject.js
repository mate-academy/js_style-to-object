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
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const arrSplit = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el.length > 1);

  for (const el of arrSplit) {
    const elSplit = el.split(':').map(elArr => elArr.trim());

    result[elSplit[0]] = elSplit[1].trim();
  }

  return result;
}

module.exports = convertToObject;
