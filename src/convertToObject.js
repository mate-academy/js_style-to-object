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
  const patternValue = /(?<=:\s).+/g;
  const patternKey = /.*(?=:)/g;
  const style = {};
  sourceString.split(';').forEach(item => {
    const key = item.trim('').match(patternKey);
    const value = item.trim('').match(patternValue);
    if (key !== null && value !== null) {
      style[key[0].trim()] = value[0].trim();
    }
  });

  return style;
}

module.exports = convertToObject;
