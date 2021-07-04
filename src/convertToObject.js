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
  const resultObject = {};

  const itemsArray = sourceString
    .split(';').map(items => items.trim())
    .filter(items => items.length > 0);

  const keys = itemsArray.map(items => items.split(':')[0].trim());
  const values = itemsArray.map(items => items.split(':')[1].trim());

  for (let i = 0; i < keys.length; i++) {
    resultObject[keys[i]] = values[i];
  }

  return resultObject;
}

module.exports = convertToObject;
