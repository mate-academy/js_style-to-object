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
  const keysRegEx = /.{0,}(?=:)/gm;
  const valuesRegEx = /(?<=:)(.*?)(?=;)/gm;

  function getPropertyPart(arr, regEx) {
    return arr.match(regEx)
      .filter(item => item)
      .map(item => item.trim());
  }

  const keys = getPropertyPart(sourceString, keysRegEx);
  const values = getPropertyPart(sourceString, valuesRegEx);

  const callback = (acc, item, index) => {
    return {
      ...acc,
      [item]: values[index],
    };
  };

  return keys.reduce(callback, {});
}

module.exports = convertToObject;
