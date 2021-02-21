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
  const withoutCrap = sourceString.replace(/\n/g, '');
  const newArray = withoutCrap.split(';');
  const filteredArray = newArray.filter(element => element.length > 2);
  const result = {};

  for (const keyValuePair of filteredArray) {
    const index = keyValuePair.indexOf(':');
    const keysOfObject = keyValuePair.slice(0, index).trim();
    const valuesOfObject = keyValuePair.slice(index + 1).trim();

    result[keysOfObject] = valuesOfObject;
  }

  return result;
}

module.exports = convertToObject;
