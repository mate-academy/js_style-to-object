'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example i
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS propertiesjs))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedValues = sourceString.split('\n').map(string =>
    string.replace(';', '').split(':'));
  const trimmedValues = splittedValues.map(string =>
    string.map(item => item.trim()));
  const filteredValues = trimmedValues.filter(string => string.length > 1);
  const convertedToObject = filteredValues.reduce((object, [key, value]) => {
    object[key] = value;

    return object;
  }, {});

  return convertedToObject;
}

module.exports = convertToObject;
