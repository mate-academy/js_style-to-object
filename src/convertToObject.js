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
  const arrayFromSource = sourceString.split(';');

  let keyValuePairs = arrayFromSource.map(x => x.split(':'));

  keyValuePairs = keyValuePairs.map(x => x.map(y => y.trim()));
  keyValuePairs = keyValuePairs.filter(x => x.length > 1);

  const entries = new Map(keyValuePairs);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
