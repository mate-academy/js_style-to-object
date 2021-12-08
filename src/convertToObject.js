'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const propertiesWithoutTab = properties.map(string =>
    string.replace(/\n/g, '').trim());

  const propertiesFilteredByLength = propertiesWithoutTab.filter(string =>
    string.length > 1);

  const splitedKey = propertiesFilteredByLength.map(string =>
    string.split(':'));

  const cleanProperties = splitedKey.map(string => string.map(el =>
    el.trim()));

  return Object.fromEntries(cleanProperties);
}

module.exports = convertToObject;
