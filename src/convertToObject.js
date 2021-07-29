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
  function splitAndTrim(string, char) {
    const arr = string.split(char);

    return arr.map((item) => item.trim());
  }

  const stringArray = splitAndTrim(sourceString, ';');

  while (stringArray.includes('')) {
    stringArray.splice(stringArray.indexOf(''), 1);
  }

  const entries = stringArray.map((item) => splitAndTrim(item, ':'));

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
